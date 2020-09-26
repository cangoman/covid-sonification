import { useEffect, useReducer } from 'react';
import axios from 'axios';
import dataReducer, { SET_USERS } from '../reducers/dataReducer';


const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/users',
    }).then(({ data }) => {
      // update the state with the result
      dispatch({ type: SET_USERS, users: data });
    });
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;