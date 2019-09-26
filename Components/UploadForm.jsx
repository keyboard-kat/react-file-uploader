import React from 'react';
import UploadFiles from './UploadFiles';
import { Card, CardBody, CardHeader, CardFooter, Row, Col, Container } from 'reactstrap';

export default class UploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.state = {
			filesArray: undefined
		};
	}
	onChangeHandler(event) {
		let filesArr = [];
		if (event.target.files) {
			let i = 0;
			while (i < event.target.files.length) {
				filesArr.push(event.target.files[i]);
				i++;
			}
			const filesArray = this.mapUploadProgress(filesArr);
			this.setState({
				filesArray
			});
		}
	}
	mapUploadProgress = (files) => files.map((file) => <UploadFiles key={file.name} fileData={file} />);

	render() {
		return (
			<Card>
				<CardHeader>
					<h1>Pick Multiple Photos</h1>
				</CardHeader>
				<CardBody>
					<Row>
						<Col xs={6}>
							<Container>
								{' '}
								Click on "Choose Files" and then use "command" on a Mac or CTRL on Windows to select
								multiple files.
							</Container>
							<Container>
								<input
									type="file"
									name="file"
									multiple
									onChange={this.onChangeHandler}
									disabled={this.state.isUploading}
									placeholder="Choose Files"
								/>
							</Container>
						</Col>

						<Col xs={6}>
							<Container>{this.state.filesArray}</Container>
						</Col>
					</Row>
				</CardBody>
				<CardFooter />
			</Card>
		);
	}
}
