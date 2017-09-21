import React, { Component } from 'react';

export default class Repo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div style={{marginTop: "50"}}>{ this.props.params.repoName }</div>
    }
}
