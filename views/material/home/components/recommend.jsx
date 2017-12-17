import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';

const styles = {
    recommend: {
        height: document.documentElement.clientHeight - 40 - 48 - 56,
        padding: '0.5rem 0.375rem 0',
        overflow: 'scroll',
    },
    intro: {
        fontSize: '16px',
        color: '#000',
        opacity: '.5',
    },
    list: {
        padding: '0.125rem 0',
        height: '1.9rem',
    },
    item: {
        position: 'relative',
        height: '100%',
    },
    itemImg: {
        position: 'absolute',
        width: '1.625rem',
        height: '1.625rem',
        border: '0.025rem solid transparent',
    },
    itemButton: {
        width: '2.5rem',
        display: 'inline-flex',
        justifyContent: 'center',
        position: 'absolute',
        right: '0.25rem',
        top: '0.375rem',
        padding: '0.2rem 0.75rem',
        borderRadius: '0.1rem',
        color: '#fff',
        background: '#6495ED',
    },
    itemName: {
        marginLeft: '2rem',
        height: '100%',
        marginRight: '2.425rem',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
    },
    itemNameFirstChild: {
        height: '0.5rem',
        fontWeight: 'bold',
    },
    itemNameSecChild: {
        height: '0.5rem',
        opacity: '.5',
    },
    blueTick: {
        marginLeft: '0.05rem',
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

    handleFollow = (i) => {
        this.setState({curIndex: i});
        let recommends = this.props.recommends;
        recommends.map((value, index) => {
            if (index === i) {
                recommends[index]['name'+index] = !recommends[index]['name'+index];
            }
        });
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
