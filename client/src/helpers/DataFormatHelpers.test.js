import { createTimelineData, createDailyData } from './DataFormatHelpers'


describe("Data helper functions to clean up our data before sending it to our visuals and synths", () => {

  xit('outputs an object with 2 elements, countryInfo and data', () => {
    const countryInfo = {name: 'Colombia', alpha2Code: 'CO', latlng: [4, -72]};
    const data = [{
      cases: 824042,
      deaths: 12345,
      recovered: 12345
    }]
  
    const expectedData = {
      countryInfo: {
        lat: 4,
        long: -72
      },
      data: [{
          cases: 824042,
          deaths: 12345,
          new_cases: 824042,
          new_deaths: 12345,
          new_recoveries: 12345,
          recovered: 12345
        }]
    }
    
    const formattedData = createTimelineData(countryInfo, data);
    expect(formattedData).toEqual(expectedData)
  })


  xit('Updates the data to show the new cases, new recoveries, new deaths by date', () => {
    const countryInfo = {name: 'Colombia', alpha2Code: 'CO', latlng: [4, -72]};
    const data = [{
      cases: 175000,
      deaths: 1000,
      recovered: 10000
    },
    {
      cases: 75000,
      deaths: 665,
      recovered: 2500
    },
    {
      cases: 50000,
      deaths: 250,
      recovered: 1000
    }]

    const expectedData = {
      countryInfo: {
        lat: 4,
        long: -72
      },
      data: [{
        cases: 175000,
        deaths: 1000,
        new_cases: 100000,
        new_deaths: 335,
        new_recoveries: 7500,
        recovered: 10000,
      },
      {
        cases: 75000,
        deaths: 665,
        new_cases: 25000,
        new_deaths: 415,
        new_recoveries: 1500,
        recovered: 2500
      },
      {
        cases: 50000,
        deaths: 250,
        new_deaths: 250,
        new_cases: 50000,
        new_recoveries: 1000,
        recovered: 1000
      }]
    }
    const formattedData = createTimelineData(countryInfo, data);
    expect(formattedData).toEqual(expectedData)
    
  })

  xit('Creates an array filled with arrays for each date', () => {
    const data = [{
      cases: 175000,
      deaths: 1000,
      recovered: 10000
    },
    {
      cases: 75000,
      deaths: 665,
      recovered: 2500
    },
    {
      cases: 50000,
      deaths: 250,
      recovered: 1000
    }]

    

    createDailyData(data);
  })

})
