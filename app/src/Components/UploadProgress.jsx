import React from 'react';
import UploadSuccess from './UploadSuccess';
const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com';

class UploadProgress extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isUploadSuccess: undefined
		};
	}

	componentDidMount() {
		if (this.props.files) {
			debugger;

			let promises = [];
			this.props.files.forEach((file) => {
				let payload = {
					uploadUrl: `${UPLOAD_BUCKET}/${file.name}`,
					method: 'PUT',
					data: file
				};
				console.log(payload);
				promises.push(this.FileService(payload));
			});

			try {
				Promise.all(promises);
				this.setState({ isUploadSuccess: true });
			} catch (e) {
				this.setState({ isUploadSuccess: false });
			}
		}
	}
	FileService(payload) {
		return new Promise((resolve, reject) => {
			const req = new XMLHttpRequest();

			req.open(payload.method, payload.uploadUrl);
			req.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
			req.setRequestHeader('Access-Control-Allow-Origin', '*');
			req.overrideMimeType(payload.data.type);
			req.send(payload.data);
		});
	}

	render() {
		return (
			<div>
				{this.state.isUploadSuccess ? (
					<UploadSuccess files={this.props.files} />
				) : (
					<div styles={{ marginLeft: '32px', overflowY: 'auto' }}>
						<br />
						<h5>Upload in progress...</h5>
						<br />
						{this.props.files.map((file) => {
							return (
								<div key={file.name}>
									{file.name}
									<span className="Filename">{file.name}</span>
									<div
										style={{
											width: '100%',
											background: 'gray',
											height: '20px',
											borderRadius: '20px'
										}}
									>
										<div
											style={{
												borderRadius: '20px',
												background: 'skyblue',
												width: '85%',
												height: '20px'
											}}
										/>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		);
	}
}
export default UploadProgress;
