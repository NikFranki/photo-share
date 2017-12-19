import React, { Component } from 'react';

const styless = {
    ItemLi: {
        float: 'left',
        display: 'inline-flex',
        width: '33.3%',
        height: '110px',
        paddingBottom: '2px',
        paddingRight: '2px',
    },
    ItemLiLast: {
        float: 'left',
        display: 'inline-flex',
        width: '33.3%',
        height: '110px',
        paddingBottom: '2px',
    },
    ItemLiImg: {
        width: '100%',
    }
}

export default class SlideImgs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="slide-imgs" style={{height: document.documentElement.clientHeight - 140 - 56 + 'px', overflowY: 'scroll'}}>
                {
                    [1,2,3,4,5,6,7].map((value, i) => <ul key={i}>
                    <li style={styless.ItemLi}><img style={styless.ItemLiImg} src="../../../img/ramos2.jpg" alt="1" /></li>
                    <li style={styless.ItemLi}><img style={styless.ItemLiImg} src="../../../img/ramos.jpg" alt="2" /></li>
                    <li style={styless.ItemLiLast}><img style={styless.ItemLiImg} src="../../../img/ramos3.jpg" alt="3" /></li>
                </ul>)
                }
            </div>
        )
    }
}
