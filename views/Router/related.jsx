import React, { Component } from 'react';
import {CardMedia} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import '../Style/related.less';

export default class Related extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <MuiThemeProvider>
                    <div className="related">
                                {
                                    this.props.photos.map((item, key) => {
                                        return  <div key={key} className="photo-wall">
                                                    <a><CardMedia><img style={{marginBottom: '0.05rem'}} src="../../../img/ramos2.jpg" alt="photo" /></CardMedia></a>
                                                    <a><CardMedia><img style={{marginBottom: '0.05rem'}} src="../../../img/ramos.jpg" alt="photo" /></CardMedia></a>
                                                    <a><CardMedia><img style={{marginBottom: '0.05rem'}} src="../../../img/ramos3.jpg" alt="photo" /></CardMedia></a>
                                                </div>
                                    })
                                }
                            </div>
                </MuiThemeProvider>
    }
}

Related.defaultProps = {
    photos: [1,2],
}
