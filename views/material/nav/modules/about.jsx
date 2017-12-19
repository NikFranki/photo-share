import React, { Component } from 'react';
import { Link } from 'react-router';

const styles = {
    ul: {
        position: 'absolute',
        top: '50px',
    }
}

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       return  <div>
            <h2>about</h2>
            {this.props.children}
            <ul style={styles.ul} className="about-ul">
                <li><a href="#/about/reactjs/repoName">react-router</a></li>
                <li><a href="#/about/facebook/react">react</a></li>
            </ul>
       </div>;
    }
}

export default About;
