import React, { Component } from 'react';
import { Link } from 'react-router';
import TabsExampleIcon from './tabsExampleIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabFirst from './tabFirst';
import TabSecond from './tabSecond';
import TabThird from './tabThird';

const styles = {
    li: {
        display: 'inline-block',
        width: '33.3%',
    }
}

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div className="home-page">
                    {/*<MuiThemeProvider>
                      <TabsExampleIcon pageTab={this.props.pageTab} handleTopIndex={this.handleTopIndex} />
                    </MuiThemeProvider*/}
                    <ul>
                        <li style={styles.li}><Link to='/home/tab1'><TabFirst /></Link></li>
                        <li style={styles.li}><Link to='/home/tab2'><TabSecond /></Link></li>
                        <li style={styles.li}><Link to='/home/tab3'><TabThird /></Link></li>
                    </ul>
                    {this.props.children}
                </div>;
    }
}

HomePage.defaultProps = {
  pageTab: [1,2,3],
}
