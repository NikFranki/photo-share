import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BottomNavigationExampleSimple from './components/bottomNavigationExampleSimple';
import TabsExampleIcon from './components/tabsExampleIcon';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selcetBottomIndex: 0,
        selectTopIndex: 0,
    };
    this.showHomeContent = this.showHomeContent.bind(this);
    this.handleSelectIndex = this.handleSelectIndex.bind(this);
    this.renderHomePage = this.renderHomePage.bind(this);
  }

  componentDidMount() {
    //固定底部菜单栏
    this.refs.homeMenu.childNodes[0].childNodes[1].className = "fixed-bottom";
  }

  handleSelectIndex(selcetIndex) {
    this.setState({selcetBottomIndex: selcetIndex});
  }

  handleTopIndex(topIndex) {
    this.setState({selectTopIndex: topIndex});
  }

  renderHomePage() {
    const style = {margin: 5, left: 10};
    const homeConHeight = {"height": document.body.clientHeight-40-56};
    return <div className="home-page">
            <div >
              <TabsExampleIcon pageTab={this.props.pageTab} handleTopIndex={this.handleTopIndex} />
            </div>
          </div>;
  }

  showHomeContent() {
    let content, classNames;
    let index = this.state.selcetBottomIndex;
    switch(index) {
      case 0:
        content = this.renderHomePage();
        break;
      case 1:
        content = <div>Search</div>;
        break;
      case 2:
        content = <div>Add</div>;
        break;
      case 0:
        content = <div>Favorites</div>;
        break;
      default:
        content = <div>Peason</div>;
    }
    return content;
  }

  render() {
    let content = this.showHomeContent();
    return (
      <MuiThemeProvider>
        <div className="material-home-class">
            <div className="home_menu" ref="homeMenu">
              <div className="home-container">
                {content}
                <BottomNavigationExampleSimple handleIndex={this.handleSelectIndex} />
              </div>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.defaultProps = {
  pageTab: [1,2,3],
}

ReactDOM.render(
  <App />,
  document.getElementById('material-home')
);
