import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
	width: 100%;
`;

const IdImageField = props => {
	const { baseUrl, source, record } = props;
	return <Image src={baseUrl + record[source] + '/'} {...props} />;
};

IdImageField.propTypes = {
	label: PropTypes.string,
	record: PropTypes.object,
	source: PropTypes.string.isRequired
};

export default IdImageField;
