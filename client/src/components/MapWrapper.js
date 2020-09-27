import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Card } from 'react-bootstrap'

import WorldMap from '../d3/WorldMap'


function MapWrapper(props) {
  
  // create a hook to refer to our svg element and set the map
  const svgRef = useRef();
  const [map, setMap] = useState(null);

  //data will come from the top level, we'll format it and pass it to both visual and sound components
  const dummyData = [1,2,3,4,5];

  useEffect(() => {
    // DrawWorldMap(svgRef.current);
    if (!map)
      setMap(new WorldMap(svgRef.current))
    else
      map.update(dummyData)
  }, [map, dummyData] ) 

  return (
    <Row>
      <Col sm="12" md="9" lg="9" xl="9" >
          <Card className="map-container">
            <svg ref={svgRef} className="map-vis"></svg>
          </Card>
      </Col>
    </Row>
  )
}

export default MapWrapper;



