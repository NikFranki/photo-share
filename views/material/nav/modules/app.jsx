import React, { Component } from 'react';
import About from './about';
import Repos from './repos';
import NavLink from './NavLink';
import Home from './home';
import Pos from './pos';
import Pop from './pop';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.children}
            <ul role="nav">
                <li><NavLink to="/" onlyActiveOnIndex={true} >Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/repos">Repos</NavLink></li>
                <li><NavLink to="/pos">Pos</NavLink></li>
                <li><NavLink to="/pop">Pop</NavLink></li>
            </ul>
        </div>;
    }
}

export default App;
