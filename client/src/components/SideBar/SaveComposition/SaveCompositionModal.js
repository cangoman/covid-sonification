import React, { useState } from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';

function SaveCompositionModal(props) {
	const [show, setShow] = useState(false);

	const [compositionTitle, setCompositionTitle] = useState('Untitled');

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSave = () => {
		let title = compositionTitle;

		props.saveComposition(title);
		setShow(false);
		setCompositionTitle('Untitled');
	};

	const onChange = (e) => {
		setCompositionTitle(e.target.value);
	};

	return (
		<div>
			<Button variant='outline-light' onClick={handleShow}>
				Save Composition
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Do you want to save your composition?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<InputGroup className='mb-3'>
						<InputGroup.Prepend>
							<InputGroup.Text id='composition-title'>Title</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							aria-label='Default'
							aria-describedby='composition-title'
							value={compositionTitle}
							onChange={onChange}
						/>
					</InputGroup>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleSave}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default SaveCompositionModal;
