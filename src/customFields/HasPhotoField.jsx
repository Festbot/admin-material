import React, { Component } from 'react';

import RelatedField from './RelatedField'

class HasPhoto extends Component {

  hasPhotoEncoder = (value="") =>{
    if (value !=="" ) {
		return true
		} else {return false}
    
  } 
  

	render() {

   return (
    <RelatedField {...this.props} action={this.hasPhotoEncoder}/>
   )
}
}

// HasPhoto.propTypes = {
// 	label: PropTypes.string,
// 	record: PropTypes.object,
// 	source: PropTypes.string.isRequired
// };

export default HasPhoto;
