import React, {Component} from 'react';

export default class HomePageTabFirst extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>{this.props.params.repoName}</div>
    }
}
