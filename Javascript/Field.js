// Dependencies
import React, { PropTypes } from 'react';

// Stateless component / Functional component
const Field = (props) => (
    <input 
    onChange={props.onChange}
    type={props.textarea ? 'textarea' : 'text'}
    value={props.value}
    />
);
// PropTypes is a way to ensure we are expecting
// Certain props that will enable the component to
// function properly
Field.prototype = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    textarea: PropTypes.bool.isRequired
};

Field.defaultProps = {
    textarea: false,
};

export default Field;