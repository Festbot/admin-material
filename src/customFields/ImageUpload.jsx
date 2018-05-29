import React, { Component } from 'react'
import PropTypes from 'prop-types';
//import classes from './ImageUpload.css'




export class ImageUpload extends Component {
  
  constructor (props) {
    super(props)
    this.state={
      imageSource: props.record[props.source]
    }
  }


  fileSelectedHandler = event => {
    const file = event.target.files[0];
    console.log(event.target);
    console.log(file);
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
    this.previewFile()
  };


  previewFile =() => {
    const preview = document.querySelector('img');
    const file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", () => {
      this.setState({imageSource: reader.result })
      this.props.input.onChange(this.state.imageSource)
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }

    

  }

  render() {
    const {baseUrl,width, record, source} = this.props


    return (
      <div>
      <img src={this.state.imageSource}/>
      <input type="file" onChange={this.fileSelectedHandler} />
      
      </div>
    )
  }
}


ImageUpload.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default ImageUpload
