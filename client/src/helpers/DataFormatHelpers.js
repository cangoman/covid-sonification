function createTimelineData(countryInfo, data) {
  const countryObject = {
    countryInfo: {
      lat: countryInfo.latlng[0],
      long: countryInfo.latlng[1]
    },
    data: getDiffData(data)
  }
  return countryObject;
}

function getDiffData(data) {
  
  for (let i = 0; i < data.length-1; i++) {
    data[i]["new_cases"] = data[i].cases - data[i+1].cases;
    data[i]["new_deaths"] = data[i].deaths - data[i+1].deaths;
    data[i]["new_recoveries"] = data[i].recovered - data[i+1].recovered;
  }

  data[data.length-1]["new_cases"] = data[data.length-1].cases;
  data[data.length-1]["new_deaths"] = data[data.length-1].deaths;
  data[data.length-1]["new_recoveries"] = data[data.length-1].recovered;

  return data;
}

module.exports = {
 createTimelineData
} 
  