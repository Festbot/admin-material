import React from 'react'
import PropTypes from 'prop-types';
import classes from './IdImageField.css'


const IdImageField = ({baseUrl,width, source,record={}}) => {
  return (
    <img src={baseUrl + record[source] + ".jpg"} style={{width: width}} />
  )
}

IdImageField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default IdImageField
