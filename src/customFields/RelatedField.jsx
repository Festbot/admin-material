import React, { Component } from 'react';
import {DisabledInput,FormDataConsumer} from 'react-admin';

class RelatedField extends Component {
	
	render() {
    const {source,destination} = this.props
		return (
      <FormDataConsumer>
      
      {({ formData, ...rest }) => {
          formData[destination]=this.props.action(formData[source])
        return (
          <DisabledInput 
          source={destination}
          {...rest}
      />
        )
      }}
    </FormDataConsumer>

		);
	}
}

// Slug.propTypes = {
// 	label: PropTypes.string,
// 	record: PropTypes.object,
// 	source: PropTypes.string.isRequired
// };

export default RelatedField;
