import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Checkbox from 'material-ui/Checkbox';

import '../../../../node_modules/rmc-picker/assets/index.css';
import '../../../../node_modules/rmc-picker/assets/popup.css';
import Popup from '../../../../node_modules/rmc-picker/lib/Popup';
import Searchbar from './search-bar';
import '../../../Style/popup.less';

const Styles = {
    avatar: {
        width: '40px',
        height: '40px',
    },
    sendseletelistItem: {
        display: 'flex',
        position: 'relative',
        margin: '0 15px',
        padding: '10px 0',
        fontSize: '14px',
    },
    section: {
        display: 'inline-block',
        margin: '0 20px 0 15px',
    },
    checkbox: {
        position: 'absolute',
        width: '20px',
        right: '0',
        top: '15px',
    },
    footer: {
        position: 'absolute',
        width: '100%',
        bottom: '0',
        left: '0',
        right: '0',
        height: '45px',
        background: '#fff',
        borderTop: '1px solid #ececec',
        fontSize: '15px',
    }
};

const Sendseletelist = () => {
    return (
        <MuiThemeProvider>
            <div className="sendseletelist">
                {[1, 2, 3].map((item, index) =>
                    <div key={index} className="sendseletelist-item" style={Styles.sendseletelistItem}>
                        <Avatar style={Styles.avatar} src="../../../img/taylor.jpg" />
                        <section style={Styles.section}>
                            <p>taylor</p>
                            <p>swift</p>
                        </section>
                        <Checkbox style={Styles.checkbox}
                       />
                    </div>
                )}
            </div>
        </MuiThemeProvider>
    )
}

const Footer = ({hanleCancel}) => <button onClick={() => hanleCancel()} style={Styles.footer}>Cancel</button>;

export default class CustomPopup extends Component {

    handlePopupStart = () => {
        this.refs.popup.onTriggerClick();
    }

    hidePopup = () => {
        this.refs.popup.hide();
    }

    HandleImgClick = () => {
        document.querySelector('.search-bar').style.borderBottom = '1px solid #4791ff';
    }

    handleInputClick = () => {
        document.querySelector('.search-bar').style.borderBottom = '1px solid #4791ff';
    }

    onOk = () => {

    }

    onDismiss = () => {
       console.log('onDismiss');
    }

    render() {
        const popupContent = (
            <div className="popun-content" style={{ height: document.documentElement.clientHeight - 200}}>
                <Searchbar ischangeicon={false} onHandleImgClick={this.HandleImgClick} onHandleInputClick={this.handleInputClick} searchbarStyle={{margin: '0 15px'}} />
                <Sendseletelist />
                <Footer hanleCancel={this.hidePopup} />
            </div>
        );

        return (
            <div style={{ margin: '10px 30px' }}>
                {/*<div onClick={() => this.refs.popup.onTriggerClick()}>lala</div>*/}
                <div>
                  <Popup
                    ref="popup"
                    className="fortest"
                    transitionName="rmc-picker-popup-slide-fade"
                    maskTransitionName="rmc-picker-popup-fade"
                    content={popupContent}
                    title=""
                    onDismiss={this.onDismiss}
                    onOk={this.onOk}
                    dismissText="Send to"
                    okText="New Group"
                  >
                  <div></div>
                  </Popup>
                </div>
            </div>
        )
    }
}
