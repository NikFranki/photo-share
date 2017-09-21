import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

import './style.css';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    display: "inline-block",
    float: "right",
    width: 24,
  },
};

const CheckBox = () => <Checkbox
          style={styles.checkbox}
        />;

export default CheckBox;

class HomeSend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listitem: this.props.listitem || [],
        };
        this.handleOninput = this.handleOninput.bind(this);
        this.handleListItem = this.handleListItem.bind(this);
    }

    componentDidMount() {
    }

    handleOninput(e) {
      let value = e.target.value;
      //判断输入的在列表里面的人名
      let filtered = this.props.listitem.filter((item, index) => {
        if (item.primaryText.indexOf(value) > -1) {
            return item;
        }
      });
      console.log(filtered);
      this.setState({listitem: filtered});
    }

    handleListItem(obj) {
      console.log(obj.target);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <div className="homeSend">
                            <span>收件人：</span>
                            <input type="text" placeholder="搜索" onInput={this.handleOninput} />
                        </div>
                        <div style={{height: document.body.clientHeight-52, overflow: "auto",}} className="listyle">
                            <List>
                              {
                                this.state.listitem.map((item, index) => <ListItem onClick={this.handleListItem} key={item.key} ref={"row"+index} primaryText={item.primaryText} leftAvatar={<Avatar src={item.imgSrc} />} rightIcon={<CheckBox />}/> )
                              }
                            </List>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

HomeSend.defaultProps = {
  listitem: [
              {key: 0, primaryText: 'abc',imgSrc: '../../../img/solo.jpg'},
              {key: 1, primaryText: 'abc',imgSrc: '../../../img/solo.jpg'},
              {key: 2, primaryText: 'cde',imgSrc: '../../../img/dream.jpg'},
              {key: 3, primaryText: 'cde',imgSrc: '../../../img/dream.jpg'},
              {key: 4, primaryText: 'efg',imgSrc: '../../../img/solo.jpg'},
              {key: 5, primaryText: 'efg',imgSrc: '../../../img/solo.jpg'},
              {key: 6, primaryText: 'opq',imgSrc: '../../../img/dream.jpg'},
              {key: 7, primaryText: 'opq',imgSrc: '../../../img/dream.jpg'},
              {key: 8, primaryText: 'qwr',imgSrc: '../../../img/solo.jpg'},
              {key: 9, primaryText: 'qwr',imgSrc: '../../../img/solo.jpg'}
            ],
};

export default HomeSend;

// ReactDOM.render(<HomeSend />, document.getElementById("material-homeSend"));
