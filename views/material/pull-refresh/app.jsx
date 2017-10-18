import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import ReactPullToRefresh from 'react-pull-to-refresh';
import Axios from 'axios';
import './app.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
        this.handleRefresh = this.handleRefresh.bind(this);
        this.fetchToApi = this.fetchToApi.bind(this);
    }

    componentDidMount() {
        this.fetchToApi();
    }

    handleRefresh(resolve, reject) {

        let success = this.fetchToApi();
        // do some async code here
        if (success) {
            resolve();
        } else {
            reject();
        }
    }

    fetchToApi() {
        let success = true;
        Axios.get(`http://www.subreddit.com/r/reactjs.json`)
        .then(
            (response) => {
                this.setState({items: this.state.items.concat(response.data.data.children)})
                console.log(response.data.data.children)
            }
        )
        .catch(
            error => {
                success = false;
                console.log(error)
            }
        )
        return success;
    }

    render() {
        const {items} = this.state;
        return <div>
            <ReactPullToRefresh
              onRefresh={this.handleRefresh}
              className="your-own-class-if-you-want"
              style={{
                textAlign: 'center'
              }}>
              <h3>Pull down to refresh</h3>
              <ul style={{listStyle: "none"}}>
                {
                    items.length > 0 && items.map((item, key) => {
                        return <li key={key}>{key+" "+item.data.title}</li>
                    })
                }
              </ul>
              <div>etc.</div>
            </ReactPullToRefresh>
        </div>
    }
}

render(<App />, document.getElementById('material-app'));
