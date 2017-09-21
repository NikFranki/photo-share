import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class NavLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Link {...this.props} activeClassName='active' />;
    }
}

export default NavLink;
