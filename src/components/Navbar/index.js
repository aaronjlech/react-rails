import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';
export default class Navbar extends Component {
    render() {
        return (
            <nav  className="c-navBar">
                <div className="c-navBar__col c-navBar__col--left">
                    <NavLink to="/articles">View Articles</NavLink>
                </div>
                <div className="c-navBar__col c-navBar__col--center">
                    <Link to="/">
                        <h1 className="c-navBar__logo">
                            ReactiveRails
                        </h1>
                    </Link>
                </div>
                <div className="c-navBar__col c-navBar__col--right">
                    <NavLink to="/articles-create">Create Article</NavLink>
                </div>
            </nav>
        )
    }
}