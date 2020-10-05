import React,  { useEffect, useState } from 'react';
import DashboardCard from '../components/UserDashboard/DashboardCard';
import { getCompositions } from '../helpers/CompositionsHelpers'


const useCompositions = () => {
  const [compositions, setCompositions] = useState([]);

	const userEmail = localStorage.getItem('email')
	useEffect(() => {
		 setCompositions(getCompositions(userEmail)
       .then(result => result.map( (element, index) => {
         return <DashboardCard key={index} title={element.title} />
       })));
  }, []);
  

  return {
    compositions
  }
}

export default useCompositions;