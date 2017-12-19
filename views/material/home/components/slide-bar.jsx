import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';

const styles = {
    slideBar: {
        width: '100%',
        height: '100px',
        background: '#eee',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        overflowX: 'scroll',
    },
    slideBarItem: {
        display: 'inline-flex',
        width: '25%',
        height: '100%',
        padding: '10px 0',
        flexFlow: 'column',
        alignItems: 'center',
    },
    slideBarItemAvatar: {
        width: '60px',
        height: '60px',
    }
}

export default class SlideBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="slide-bar" style={styles.slideBar}>
                    {
                        [1,2,3,4,5,6,7].map((value, i) => <div key={i} className="slideBarItem" style={styles.slideBarItem}>
                        <Avatar style={styles.slideBarItemAvatar} src="../../../img/taylor.jpg" />
                        <p>taylor swift</p>
                        </div>)
                    }
                </div>
            </MuiThemeProvider>
        )
    }
}
