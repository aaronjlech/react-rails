import React from 'react';
import Navbar from './Navbar';

export default ( props ) => (
    <div class="siteWrapper">
        <Navbar/>
        {props.children}
    </div>
)