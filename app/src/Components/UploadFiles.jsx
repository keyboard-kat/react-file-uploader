const React = require('react');
const FileService = require('./FileService.js');
const UploadProgress = require('./UploadProgress.jsx');
const UploadSuccess = require('./UploadSuccess.jsx');
const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com';

class UploadFiles extends React.Component {
	constructor(props) {
		super(props);
		this.uploadFiles = this.uploadFiles.bind(this);
		this.state = {
			isUploading: undefined,
			isUploadSuccess: undefined
		};
	}
	componentDidMount() {
		let isUploading = false;
		if (this.props.files) {
			isUploading = true;
			this.setState({ isUploading });
			this.uploadFiles();
		}
	}
	async uploadFiles() {
		let promises = [];
		this.props.files.forEach((file) => {
			let payload = {
				uploadUrl: `${UPLOAD_BUCKET}/${file.name}`,
				method: 'PUT',
				data: file
			};
			promises.push(FileService(payload));
		});

		try {
			await Promise.all(promises);
			this.setState({ isUploadSuccess: true, isUploading: false });
		} catch (e) {
			this.setState({ isUploadSuccess: false });
		}
	}

	renderUploadStatus() {
		if (this.state.isUploading && !this.state.isUploadSuccess) {
			return <UploadProgress files={this.props.files} />;
		} else if (!this.state.isUploading && this.state.isUploadSuccess) {
			return <UploadSuccess files={this.props.files} />;
		}
	}

	render() {
		return <div>{this.renderUploadStatus()}</div>;
	}
}

module.exports = UploadFiles;
