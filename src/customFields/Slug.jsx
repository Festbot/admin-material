import React, { Component } from 'react';

import RelatedField from './RelatedField'

class Slug extends Component {

  slugEncoder = (value="") =>(value.replace(/[^a-zA-Z0-9 ]+/g, '').replace(/ +/g, '_').toLowerCase())
  

	render() {

   return (
    <RelatedField {...this.props} action={this.slugEncoder}/>
   )
}
}

// Slug.propTypes = {
// 	label: PropTypes.string,
// 	record: PropTypes.object,
// 	source: PropTypes.string.isRequired
// };

export default Slug;
