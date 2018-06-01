import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import $ from 'jquery';

const styles = {
    recommend: {
        height: document.documentElement.clientHeight - 40 - 48 - 56,
        padding: '20px 15px 0',
        overflow: 'scroll',
    },
    intro: {
        fontSize: '16px',
        color: '#000',
        opacity: '.5',
    },
    list: {
        padding: '5px 0',
        height: '76px',
    },
    item: {
        position: 'relative',
        height: '100%',
    },
    itemImg: {
        position: 'absolute',
        width: '65px',
        height: '65px',
        border: '1px solid transparent',
    },
    itemButton: {
        width: '100px',
        display: 'inline-flex',
        justifyContent: 'center',
        position: 'absolute',
        right: '10px',
        top: '15px',
        padding: '8px 30px',
        borderRadius: '4px',
        color: '#fff',
        background: '#6495ED',
    },
    itemName: {
        marginLeft: '80px',
        height: '100%',
        marginRight: '97px',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
    },
    itemNameFirstChild: {
        height: '20px',
        fontWeight: 'bold',
    },
    itemNameSecChild: {
        height: '20px',
        opacity: '.5',
    },
    blueTick: {
        marginLeft: '2px',
    },
}

export default class Recommend extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        curIndex: 0,
    }

    componentDidMount() {
        let h = document.body.scrollHeight;
        window.onresize = function() {
            if (document.body.scrollHeight < h) {
                document.querySelector('.footer').style.display = "none";
            } else {
                document.querySelector('.footer').style.display = "block";
            }
        };
    }

    componentWillUnmount() {
        $('.search-input input').blur();
    }

    handleFollow = (i) => {
        this.setState({curIndex: i});
        let recommends = this.props.recommends;
        if (this.props.onFollowClick) {
            this.props.onFollowClick(i);
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="recommend-page" style={styles.recommend}>
                    <p className="recommend-intro" style={styles.intro}>推荐</p>
                    {
                        this.props.recommends.map((item,index) => <div key={index} className="remomend-list" style={styles.list}>
                        <div className="recommend-item" style={styles.item}>
                            <Avatar src="../../../img/taylor.jpg" style={styles.itemImg} />
                            <div className="recommend-name" style={styles.itemName}>
                                <p style={styles.itemNameFirstChild}>Taylorswift<img style={styles.blueTick} src="../../../img/ins_approve.svg" alt="blue_tick" /></p>
                                <p style={styles.itemNameSecChild}>Taylor Swift</p>
                            </div>
                            <button style={styles.itemButton} onClick={() => this.handleFollow(index)}>{item['name'+index] ? '已关注' : '关注'}</button>
                        </div>
                    </div>
                    )}
                </div>
            </MuiThemeProvider>
        )
    }
}
