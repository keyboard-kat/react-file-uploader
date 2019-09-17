import React from 'react';
import UploadProgress from './UploadProgress';

export default class UploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.state = {
			filesArray: undefined,
			isUploading: undefined
		};
	}
	onChangeHandler(event) {
		let filesArr = [];
		if (event.target.files) {
			this.setState({ isUploading: true });
			let files = event.target.files;
			let i = 0;
			while (i < files.length) {
				filesArr.push(files[i]);
				i++;
			}
			const filesArray = filesArr;
			this.setState({
				filesArray
			});
		}
	}

	render() {
		return (
			<div>
				<div>
					<h1>Pick Multiple Photos</h1>
					<p>
						Click on "Choose Files" and then use "command" on a Mac or CTRL on Windows to select multiple
						files.
					</p>
					<button
						style={{
							textDecoration: 'none',
							color: 'gray',
							backgroundColor: '#DDD',
							padding: '10px 20px',
							borderRadius: '35px',
							border: '1px dashed #BBB',
							fontSize: '24px',
							fontWeight: 'bold'
						}}
					>
						Choose Files
						<input
							style={{
								overflow: 'hidden',
								position: 'absolute',
								left: '0',
								top: '0',
								opacity: '0',
								width: '350px',
								height: '150px'
							}}
							type="file"
							name="file"
							multiple
							onChange={this.onChangeHandler}
							disabled={this.state.isUploading}
						/>
					</button>
				</div>
				<br />
				{this.state.isUploading ? <UploadProgress files={this.state.filesArray} /> : ''}
			</div>
		);
	}
}
