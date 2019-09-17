import React from 'react';
import UploadForm from './UploadForm';
import { Container, Row, Col, Card, CardBody, CardHeader, CardFooter } from 'reactstrap';

class UploaderContainer extends React.Component {
	render() {
		return (
			<Container>
				<Row className="no-gutters">
					<Col sm="12">
						<Card>
							<CardHeader>
								<h1>Photo Upload</h1>
							</CardHeader>
							<CardBody>
								<UploadForm />
							</CardBody>
							<CardFooter />
						</Card>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default UploaderContainer;
