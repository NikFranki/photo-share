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

        };
    }

    componentDidMount() {
        console.log(this.refs.Lam.props.primaryText);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <div className="homeSend">
                            <span>收件人：</span>
                            <input type="text" placeholder="搜索" />
                        </div>
                        <div style={{height: document.body.clientHeight-52, overflow: "auto",}} className="listyle">
                            <List>
                              <ListItem ref="Lam" primaryText="Brendan Lam" leftAvatar={<Avatar src="../../../img/dream.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lbm" leftAvatar={<Avatar src="../../../img/solo.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lcm" leftAvatar={<Avatar src="../../../img/dream.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Ldm" leftAvatar={<Avatar src="../../../img/solo.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lem" leftAvatar={<Avatar src="../../../img/dream.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lfm" leftAvatar={<Avatar src="../../../img/solo.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lgm" leftAvatar={<Avatar src="../../../img/dream.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lhm" leftAvatar={<Avatar src="../../../img/solo.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lim" leftAvatar={<Avatar src="../../../img/dream.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Ljm" leftAvatar={<Avatar src="../../../img/solo.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lkm" leftAvatar={<Avatar src="../../../img/solo.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Llm" leftAvatar={<Avatar src="../../../img/dream.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lmm" leftAvatar={<Avatar src="../../../img/solo.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lnm" leftAvatar={<Avatar src="../../../img/dream.jpg" />} rightIcon={<CheckBox />}/>
                              <ListItem primaryText="Brendan Lom" leftAvatar={<Avatar src="../../../img/solo.jpg" />} rightIcon={<CheckBox />}/>
                            </List>
                        </div>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

ReactDOM.render(<HomeSend />, document.getElementById("material-homeSend"));
