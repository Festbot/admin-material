import React from 'react';
import PropTypes from 'prop-types';
import classes from './TagList.css';

const TagList = ({ source, record = {} }) => {
	return (
		<div>
			{typeof record[source] !== 'undefined' ? (
				record[source].map((genre, i) => (
					<div key={i} className={classes.container}>
						{genre}{' '}
					</div>
				))
			) : (
				<div />
			)}
		</div>
	);
};

TagList.propTypes = {
	label: PropTypes.string,
	record: PropTypes.object,
	source: PropTypes.string.isRequired
};

export default TagList;
