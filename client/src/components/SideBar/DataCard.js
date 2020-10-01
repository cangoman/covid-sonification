import React from 'react';

import { Card } from 'react-bootstrap';

function DataCard(props) {
	return (
		<Card bg='dark' text='white'>
			<Card.Header>{props.date}</Card.Header>
			<Card.Body>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default DataCard;
