import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CardMedia} from 'material-ui/Card';

import '../Style/all.less';

class All extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            photos
        } = this.props;

        return  <div className="all">
                    {
                        photos.map((item, key) => {
                            return  <div key={key} className="photo-wall">
                                        <a href="#/one_photo_detail"><CardMedia><img src="../../../img/ramos2.jpg" alt="photo" /></CardMedia></a>
                                        <a href="#/one_photo_detail"><CardMedia><img src="../../../img/ramos.jpg" alt="photo" /></CardMedia></a>
                                        <a href="#/one_photo_detail"><CardMedia><img src="../../../img/ramos3.jpg" alt="photo" /></CardMedia></a>
                                    </div>
                        })
                    }
                </div>
    }
}

export default connect((state, ownProps)=>{
    return {
        photos: state.peasonPostImgs
    }
})(All)
