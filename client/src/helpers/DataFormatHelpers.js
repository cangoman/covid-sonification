const moment = require('moment')


function createTimelineData(countryInfo, data) {
  const countryObject = {
    countryInfo: {
      name: countryInfo.name,
      lat: countryInfo.latitude,
      long: countryInfo.longitude
    },
    data: getDiffData(data)
  }
  return countryObject;
}

function getDiffData(data) {
  
  for (let i = 0; i < data.length - 1; i++) {
    data[i]["new_cases"] = (data[i].cases - data[i+1].cases) >= 0 ? data[i].cases - data[i+1].cases : 0;
    data[i]["new_deaths"] = (data[i].deaths - data[i+1].deaths) >= 0 ? data[i].deaths - data[i+1].deaths : 0;
    data[i]["new_recoveries"] = (data[i].recovered - data[i+1].recovered) >= 0 ? data[i].recovered - data[i+1].recovered : 0;
  }

  data[data.length-1]["new_cases"] = data[data.length-1].cases;
  data[data.length-1]["new_deaths"] = data[data.length-1].deaths;
  data[data.length-1]["new_recoveries"] = data[data.length-1].recovered;

  for (let i = data.length; i < 365; i++) {
    const zeroes = {
      deaths: 0,
      cases: 0,
      recovered: 0,
      new_cases: 0,
      new_deaths: 0,
      new_recoveries: 0,
      last_update: null
    }
    data[i] = zeroes;
  }

  return data;
}

function getNextDay(data, counter) {
  return data.map( element => {
    return { 
      date: element.data[counter]['last_update'] !== undefined ? element.data[counter].last_update.substr(0,10) : null,
      countryInfo: {...element.countryInfo },
      data: element.data[counter]
    }
  })
}


function createDailyData(timelineData) {
  const dailyData = [];
  const indices = [];
  for (let i = 0; i < timelineData.length; i ++) {
    indices.push(0);
  }

  // let day = moment.utc();
  // console.log('moment\'s day: ', day )

  //start on the first day of data available, be it today or tomorrow local time
  //the api seems to update every hour
  let day = moment(timelineData[0].data[0].last_update)
  // console.log('the other day: ', day)


  for (let i = 0; i < 365; i++) { //hard coded value for now
    const currentDay = [];
    
    for (let j = 0; j < timelineData.length; j++) {

      let datumDay = moment(timelineData[j].data[indices[j]].last_update)
      if ( day.dayOfYear() === datumDay.dayOfYear() && day.year() === datumDay.year() ) {
        // console.log("data corresponds for this day: ", day.dayOfYear())
        currentDay.push({
          countryInfo: timelineData[j].countryInfo,
          date: day.dayOfYear(),
          data: timelineData[j].data[indices[j]]
        })
        // keep updating the index until we reach the next day. we only want the latest report for each day
        while ( day.dayOfYear() === datumDay.dayOfYear() && day.year() === datumDay.year() ) {
          indices[j]++;
          datumDay = moment(timelineData[j].data[indices[j]].last_update)
        }

      } else {
        // we want new stuff to be 0s. but totals to come from the previous days
        const data = {
          deaths: timelineData[j].data[indices[j] - 1].deaths - timelineData[j].data[indices[j] - 1].new_deaths,
          cases: timelineData[j].data[indices[j] - 1].cases - timelineData[j].data[indices[j] - 1].new_cases,
          recovered: timelineData[j].data[indices[j] - 1].recovered - timelineData[j].data[indices[j] - 1].new_recoveries,
        }

        currentDay.push({
          countryInfo: timelineData[j].countryInfo,
          date: day.dayOfYear(),
          data: {
            ...data,
            // deaths: timelineData[j].data[indices[j]],
            // cases: 0,
            // recoveries: 0,
            new_cases: 0,
            new_deaths: 0,
            new_recoveries: 0,
            last_update: null
          }
        })
      }
    }
    day = day.subtract(1, 'day')
    dailyData.push(currentDay)
  }
  return dailyData;
}

// function getDateIndices(dates) {
//   const today = moment();
//   const dateIndices = dates.map( date => {
//     const thisDate = moment(date);
//     return today.diff(thisDate, 'days')
//   })
//   return dateIndices;
// }

function getDateIndex(date) {
  const today = moment();
  const thisDate = moment(date);
  return today.diff(thisDate, 'days');
}

function today() {
  return moment().format('YYYY-MM-DD')
}



module.exports = {
 createTimelineData,
 getNextDay,
 createDailyData,
 today,
 getDateIndex
} 
  