import React from 'react';
import { Progress } from 'reactstrap';
const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com';

class UploadFiles extends React.Component {
	state = {
		uploadUrl: undefined,
		percentLoaded: 0,
		uploading: true,
		uploadSuccess: false
	};

	componentDidMount() {
		this.FileService(this.props.fileData)
			.then(this.setState({ uploading: false, uploadSuccess: true }))
			.catch((err) => {
				this.setState({ uploading: false, uploadSuccess: false });
			});
	}
	FileService(file) {
		const uploadUrl = `${UPLOAD_BUCKET}/${file.name}`;
		const method = 'PUT';
		this.setState({ uploadUrl });
		return new Promise((resolve, reject) => {
			const req = new XMLHttpRequest();
			req.upload.addEventListener('progress', (event) => {
				const percentLoaded = event.loaded / event.total * 100;
				this.setState({ percentLoaded });
			});
			req.upload.addEventListener('load', (event) => {
				return resolve(req.response);
			});
			req.upload.addEventListener('error', (event) => {
				return reject(req.response);
			});
			req.open(method, uploadUrl);
			req.overrideMimeType(file.type);
			req.send(file);
		});
	}

	render() {
		return (
			<div>
				{this.state.uploading && !this.state.uploadSuccess ? (
					<div>
						Uploading {this.props.fileData.name} {this.state.percentLoaded} %...
					</div>
				) : (
					<div>
						<a href={this.state.uploadUrl}>{this.props.fileData.name}</a> successfully uploaded!
					</div>
				)}
				<Progress value={this.state.percentLoaded} />

				{!this.state.uploading && !this.state.uploadSuccess ? <div>Error uploading file </div> : ''}
			</div>
		);
	}
}

export default UploadFiles;
