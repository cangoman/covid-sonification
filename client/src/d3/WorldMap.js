import {
	select,
	json,
	geoPath,
	geoNaturalEarth1,
	tsv,
	max,
	scaleSqrt,
	selectAll /*,  zoom, format, event */,
} from 'd3';
import { feature } from 'topojson';
import * as moment  from 'moment'

const HEIGHT = 500;
const WIDTH = 960;
const PROJECTION = geoNaturalEarth1();

//I wrote it first as a function, but I think writing it as a class with a constructor and an update method will be easier to maintain

export default class WorldMap {
	constructor(element) {
		// console.log("drawing map")
		let vis = this;
		//Append the svg element to our map visualization container

		//This allows us to resize our window and preserve the ratio on the map
		vis.svg = select(element)
			.attr('preserveAspectRatio', 'xMinYMid meet')
			.attr('viewBox', [0, 0, WIDTH, HEIGHT]);

		//specify map projection. tried mercator and naturalEarth. I like the latter better
		// const projection = geoNaturalEarth1(); //Declared it above as a constant to use it in the update method too
		const pathGenerator = geoPath().projection(PROJECTION);

		// create group for map elements
		vis.g = vis.svg.append('g').attr('class', 'map-group');

		//'tis out surrounding ellipse
		vis.g
			.append('path')
			.attr('class', 'sphere')
			.attr('d', pathGenerator({ type: 'Sphere' }))
			.attr('fill', 'none')
			.attr('stroke', '#333');

		//We can figure out zoom later, ideally we want to be able to set the limit of the zoom out to 100%, but i'm not sure how to do that yet. Alternatively, we can consider clicking on a country to zoom into it
		// vis.svg.call(zoom().on("zoom", () => {
		//   vis.g.attr("transform", event.transform)
		// }));

		//Fetch and load geographic data. May be a good idea to download this files and fetch from directory. maybe check out npm package world-atlas
		Promise.all([
			tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
			json('https://unpkg.com/world-atlas@1.1.4/world/50m.json'),
		]).then(([tsvData, topojsonData]) => {
			// parse tsv data, get country names
			const countryName = {};
			tsvData.forEach((d) => {
				countryName[d.iso_n3] = d.name;
			});

			// draw a path for each country with countryName as title shown on hover - we can take this out if we don't need it
			const countries = feature(topojsonData, topojsonData.objects.countries);
			vis.g
				.selectAll('path')
				.data(countries.features)
				.enter()
				.append('path')
				.attr('class', 'country')
				.attr('d', pathGenerator)
				.attr('fill', 'white')
				.append('title')
				.text((d) => countryName[d.id]);
		});

		vis.circles = select('.map-vis')
			.append('g')
			.attr('class', 'map-circles');

		vis.legend = select('.map-vis')
			.append('g')
			.attr('class', 'map-legend')
			.append('text');

		this.update([], null);
	}

	//We could potentially modularize this code, add another module that handles the update of data
	update(data, interval) {
		//this is just here for debugging
		//  console.log("in update function. data: ", data)
		let vis = this; // getting a reference to the current component

		selectAll('circle').remove();
		//select the map visualization element and append a group for our data points at the end
		//important step... renders last items on top, so if you dont have a group appended at the end, points will be under the map
		

		//This is to figure out the radius of the circles based on # of cases. Need to figure out how data is going to be coming in
		const radiusValue = (d) => d.data.deaths || 0;
		const sizeScale = scaleSqrt()
			.domain([0, max(data, (d) => d.data.deaths), radiusValue])
			.range([0, 20]);

		vis.circles
			.selectAll('circle')
			.data(data)
			.enter()
			.append('circle')
			.attr('class', 'country-circle')
			.attr(
				'transform',
				(d) =>
					`translate(${PROJECTION([d.countryInfo.long, d.countryInfo.lat])})`
			) // projection takes an array [longitude, latitude]
			.transition()
			.duration([2*interval/3])
			.attr('r', (d) => sizeScale(radiusValue(d)))
			.attr('fill', '#ed0000')
			.attr('stroke', 'red')
			.attr('opacity', 0.4);

			


		const date = data[0] ? data[0].date : null;
		// console.log(formatDate.format("MMM Do YY"))
		
		//vis.legend.select('text').remove();
		if (date) {
			vis.legend
				.attr('x', 75)
				.attr('y', 420)
				.style('fill', 'white')
				.style('font-size', 30)
				.transition()
				.text( (moment().dayOfYear(date)).format("MMM Do YYYY") )
		}
	}

	clearMap() {
		//probably will need a function to clear the map from all the shiiiitt
		selectAll('circle').remove();
	}
}
