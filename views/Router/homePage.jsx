import React, { Component } from 'react';
import { Link } from 'react-router';
import TabsExampleIcon from '../material/home/components/tabsExampleIcon';
import Nav from '../material/home/components/nav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabFirst from './tabFirst';
import TabSecond from './tabSecond';
import TabThird from './tabThird';
import '../Style/home-page.less';

let context;

window.addEventListener('hashchange', function(ev) {
    // let index = ev.newURL.indexOf("tab");
    // let tabIndex = ev.newURL.slice(index, index+4);
    // console.log(parseInt(/\d+/g.exec(tabIndex)[0]));
    // context.handleClick(parseInt(/\d+/g.exec(tabIndex)[0])-1);
}, false)

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        context = this;
    }

    handleClick = (i) => {
        let buttomLine = document.querySelector('.bottom-line');
        let left;
        switch(i) {
            case 0:
                left = '0%';
            case 1:
                left = (33.333 * 1) + '%';
            default:
                left = (33.333 * i) + '%';
        }
        buttomLine.style.left = left;
    }

    render() {
        let tabFrist = <Link to='/home/tab1'><TabFirst /></Link>;
        let tabSecond = <Link to='/home/tab2'><TabSecond /></Link>;
        let tabThird = <Link to='/home/tab3'><TabThird /></Link>;
        return  <div className="home-page">
                    <Nav tabs={[tabFrist, tabSecond, tabThird]} onHandleClick={this.handleClick} />
                    {this.props.children}
                </div>;
    }
}
