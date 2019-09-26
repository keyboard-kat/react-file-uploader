import React from 'react';
import UploadForm from './UploadForm';
import { Container } from 'reactstrap';

class UploaderContainer extends React.Component {
	render() {
		return (
			<Container>
				<UploadForm />
			</Container>
		);
	}
}

export default UploaderContainer;
