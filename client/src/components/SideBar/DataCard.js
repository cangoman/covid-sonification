import React from 'react';

import { Card } from 'react-bootstrap';

function DataCard(props) {

	return (
		<Card>
			<Card.Body>
				<Card.Title>{props.date}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>
				<Card.Text>
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</Card.Text>
				<Card.Link href='#'>Card Link</Card.Link>
				<Card.Link href='#'>Another Link</Card.Link>
			</Card.Body>
		</Card>
	);
}

export default DataCard;
