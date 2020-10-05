import React,  { useEffect, useState } from 'react';
import DashboardCard from '../components/UserDashboard/DashboardCard';
import { getCompositions } from '../helpers/CompositionsHelpers'


const useCompositions = () => {
  const [compositions, setCompositions] = useState([]);
  const [loaded, setLoaded] = useState(false)

	const userEmail = localStorage.getItem('email')
	useEffect(() => {
    getCompositions(userEmail).then(result => {
      setCompositions(result)
      setLoaded(true)
    })
    .catch(err => console.log(err))
  }, []);
  

  return {
    compositions,
    loaded
  }
}

export default useCompositions;