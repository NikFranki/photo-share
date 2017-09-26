import React from 'react';
import { Link } from 'react-router';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
                {this.props.children}
                <h2>Search</h2>
                <Link to="/search/page">page</Link><br />
                <Link to="/search/res">res</Link>
            </div>;
    }
}

export default Search;
