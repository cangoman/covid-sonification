import { useEffect, useReducer } from 'react';
import axios from 'axios';


const BASE_URL = "https://disease.sh"
const HISTORICAL = "/v3/covid-19/historical"



const useCountryData = () => {
  axios({
    method: 'GET',
    url: `${BASE_URL}${HISTORICAL}?lastdays=10`
  })
  .then(response => console.log(response.data))
}



export default useCountryData;



