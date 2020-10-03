import { useEffect, useReducer } from 'react';
import axios from 'axios';
import dataReducer, { SET_COUNTRY_DATA } from '../reducers/dataReducer';


const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    countries: []
  });

  useEffect(() => {
    axios({
      method: 'GET',
      // url: "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;latlng",
      url: 'https://covid19-api.org/api/countries'
    }).then(({ data }) => {
      // update the state with the result
      // console.log("inside axios call: ", data)
      dispatch({ type: SET_COUNTRY_DATA, data: data });
    });
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;