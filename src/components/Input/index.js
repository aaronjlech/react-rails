import React from 'react';

import 'input.css';

export default (props) => {
    const { type, placeholder, classNames, onChange, label } = this.props;
    return (
        <label >
            <input type={type} placeholder={placeholder || ""} className={`c-input ${classNames}`} onChange={(evt) => onChange(evt)}/>
        </label>
    );
}
