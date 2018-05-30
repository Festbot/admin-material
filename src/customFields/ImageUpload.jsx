import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

class ImageUpload extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageSource: 'https://ucarecdn.com/' + props.record[props.source] + '/'
		};
	}

	fileSelectedHandler = event => {
		const file = event.target.files[0];

		if (file instanceof File) {
			this.props.input.onChange(file);
			this.previewFile(file);
		}

		// if (file.size > 150000) {
		//   console.log('max 150kb');
		//   let message = message + 'Max size 150kb, ';
		//   return;
		// }
		// if (file.type !== 'image/jpeg') {
		//   console.log('Must be a .jpg');
		//   let message = message + 'Must be a .jpg image';
		//   return;
		// }
	};

	previewFile = file => {
		const preview = document.querySelector('img');
		const reader = new FileReader();

		reader.addEventListener(
			'load',
			() => {
				this.setState({ imageSource: reader.result });
			},
			false
		);

		reader.readAsDataURL(file);
	};

	render() {
		const { baseUrl, width, record, source } = this.props;

		return (
			<div>
				<img src={this.state.imageSource} />
				<input type="file" onChange={this.fileSelectedHandler} />
			</div>
		);
	}
}

ImageUpload.propTypes = {
	label: PropTypes.string,
	record: PropTypes.object,
	source: PropTypes.string.isRequired
};

export default props => <Field {...props} name={props.source} component={ImageUpload} />;
