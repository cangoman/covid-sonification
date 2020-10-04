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
  let day = moment.utc();
  const indices = [];
  for (let i = 0; i < timelineData.length; i ++) {
    indices.push(0);
  }

  for (let i = 0; i < 365; i++) { //hard coded value for now
    const currentDay = [];
    
    for (let j = 0; j < timelineData.length; j++) {

      const datumDay = moment(timelineData[j].data[indices[j]].last_update)
      if ( day.dayOfYear() === datumDay.dayOfYear() && day.year() === datumDay.year() ) {
        currentDay.push({
          countryInfo: timelineData[j].countryInfo,
          date: day.dayOfYear(),
          data: timelineData[j].data[indices[j]]
        })
        indices[j]++;
      } else {
        currentDay.push({
          countryInfo: timelineData[j].countryInfo,
          date: day.dayOfYear(),
          data: {
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

function getDateIndices(dates) {
  const today = moment();
  const dateIndices = dates.map( date => {
    const thisDate = moment(date);
    return today.diff(thisDate, 'days')
  })
  return dateIndices;
}
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
  