import React, { Component } from 'react';
import {CardMedia} from 'material-ui/Card';

import '../Style/all.less';

export default class All extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return  <div className="all">
                    {
                        this.props.photos.map((item, key) => {
                            return  <div key={key} className="photo-wall">
                                        <a><CardMedia><img src="../../../img/ramos2.jpg" alt="photo" /></CardMedia></a>
                                        <a><CardMedia><img src="../../../img/ramos.jpg" alt="photo" /></CardMedia></a>
                                        <a><CardMedia><img src="../../../img/ramos3.jpg" alt="photo" /></CardMedia></a>
                                    </div>
                        })
                    }
                </div>
    }
}

All.defaultProps = {
    photos: [1,2,3,4,5],
}
