import React from 'react';
import './button.css';

export default ({ children, type, onClick }) => (        
        <button onClick={(evt) => onClick(evt)} className={`c-btn ${type ? `c-btn--${type}` : ''}`}>
            {children}
        </button>
)