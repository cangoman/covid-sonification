import { select, json, geoPath, geoNaturalEarth1, tsv, max, scaleSqrt, selectAll /*, format , zoom, event */} from 'd3';
import { feature } from 'topojson'

const HEIGHT = 500;
const WIDTH = 960;
const PROJECTION = geoNaturalEarth1();

//I wrote it first as a function, but I think writing it as a class with a constructor and an update method will be easier to maintain

export default class WorldMap {
  
  constructor(element) {
    console.log("drawing map")
    let vis = this;
    //Append the svg element to our map visualization container
  

    //This allows us to resize our window and preserve the ratio on the map
    vis.svg = select(element)
      .attr("preserveAspectRatio", "xMinYMid meet")
      .attr("viewBox", [0, 0, WIDTH, HEIGHT]);
  
    //specify map projection. tried mercator and naturalEarth. I like the latter better
    // const projection = geoNaturalEarth1(); //Declared it above as a constant to use it in the update method too
    const pathGenerator = geoPath().projection(PROJECTION);
  
    // create group for map elements
    vis.g = vis.svg.append("g")
      .attr("class", "map-group");
  
    //'tis out surrounding ellipse
    vis.g.append("path")
      .attr("class", "sphere")
      .attr("d", pathGenerator({type: 'Sphere'}))
      .attr("fill", "none")
      .attr("stroke", "lightgrey")
  
    //We can figure out zoom later, ideally we want to be able to set the limit of the zoom out
    // svg.call(zoom().on("zoom", () => {
    //   g.attr("transform", event.transform)
    // }));
  
    //Fetch and load geographic data. May be a good idea to download this files and fetch from directory. maybe check out npm package world-atlas
    Promise.all([
      tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
      json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
    ])
    .then( ([tsvData, topojsonData]) => {
      // parse tsv data, get country names
      const countryName = {};
      tsvData.forEach(d => {
        countryName[d.iso_n3] = d.name        
      })
  
      // draw a path for each country with countryName as title shown on hover - we can take this out if we don't need it
      const countries = feature(topojsonData, topojsonData.objects.countries)
      vis.g.selectAll('path')
        .data(countries.features)
        .enter().append('path')
          .attr('class', 'country')
          .attr('d', pathGenerator)
          .attr("fill", "lightgrey")
        .append("title")
          .text(d => countryName[d.id])
    })



    // this.update([1,2,3,4])
  }

  update(data) {
    console.log("in update function")
    console.log(data)
    let vis = this;
  
    selectAll("circle").remove()
    //select the map visualization element and append a group for our data points at the end
    vis.circles = select(".map-vis").append("g")

    //This is to figure out the radius of the circles based on # of cases. Need to figure out how data is going to be coming in
    // const radiusValue = 2 //We need to figure this one out
    // const sizeScale = scaleSqrt()

    vis.circles.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr("class", "country-circle")
      .attr("transform", d => `translate(${PROJECTION([-72, 4])})`) //hardcoded, but this is latitude and longitude of the circle position
      .attr("r", d => 3)
      .attr("fill", "black")



  }
}