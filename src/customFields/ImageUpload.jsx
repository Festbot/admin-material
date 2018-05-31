import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

class ImageUpload extends Component {
	constructor(props) {
    super(props);
    this.previewImage = React.createRef();
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


	};

	previewFile = file => {
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
				<img src={this.state.imageSource} ref={this.previewImage}/>
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
