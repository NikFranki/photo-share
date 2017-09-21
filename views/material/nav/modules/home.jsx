import React, { Component } from 'react';
import { Link } from 'react-router';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  ul: {
    position: 'absolute',
    top: '0',
  },
};

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MuiThemeProvider>
        <div>
            {this.props.children}
            <ul style={styles.ul} className="home-ul">
                <li><Link to="/" onlyActiveOnIndex={true}>item1</Link></li>
                <li><Link to="/repo">item2</Link></li>
                <li><Link to="/repo">item3</Link></li>
            </ul>
            <div className="line"></div>
        </div>
    </MuiThemeProvider>;
    }
}

export default Home;
