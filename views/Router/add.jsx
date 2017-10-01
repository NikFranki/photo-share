import React, { Component } from 'react';
import { fetchPosts } from '../Redux/Action/Index'
import { connect } from 'react-redux'
import Axios from 'axios'
import {fetchItems} from '../Redux/Action/Index'

class Add extends Component {
    constructor(props) {
        super(props);
        this.axiosRequest = this.axiosRequest.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchPosts('reactjs'));
        // this.axiosRequest();
    }

    axiosRequest() {
      const self = this;
      Axios.get(`http://www.subreddit.com/r/reactjs.json`)
        .then(function (response) {
          self.props.dispatch(fetchItems(response.data.data.children))
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {
        console.log(this.props);
        const { dispatch } = this.props;
        return <div>add
            <button onClick={() => this.axiosRequest()}>dispatch</button>
        </div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,
        items: state.items.receivePosts
    }
}

export default connect(mapStateToProps)(Add);
