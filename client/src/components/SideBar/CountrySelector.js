import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { Button } from 'react-bootstrap'

import './CountrySelector.scss'


function CountrySelector(props) {
  const {countries} = props;
  // console.log(countries)
  const options = countries.map( country => {
    return ({
      label: country.name,
      value: country.alpha2
    })
  })

  // const [selected, setSelected] = useState([]);

  return (
    <div className="country-selector">
      <MultiSelect
        hasSelectAll={false}
        options={options}
        value={props.selected}
        onChange={props.setSelected}
        labelledBy={"Select Countries"}
        />
      <Button variant="outline-light">Clear Selection</Button>
      <Button variant="outline-light">Confirm Selection</Button>
    </div>
  )
}

export default CountrySelector;