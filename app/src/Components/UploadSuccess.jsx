const React = require('react');
const UPLOAD_BUCKET = 'https://skylight-react-interview-project.s3.amazonaws.com';
class UploadSuccess extends React.Component {
	render() {
		return (
			<div styles={{ marginLeft: '32px', overflowY: 'auto' }}>
				<br />
				<h3>Upload Successful!</h3>

				<br />
				{this.props.files.map((file) => {
					return (
						<div key={file.name}>
							<h3>
								<a href={UPLOAD_BUCKET + '/' + file.name.toString()}>Click to view photo </a>
								{file.name}
							</h3>
							<div
								style={{
									borderRadius: '20px',
									background: 'skyblue',
									width: '100%',
									height: '20px'
								}}
							/>
						</div>
					);
				})}
			</div>
		);
	}
}

module.exports = UploadSuccess;
