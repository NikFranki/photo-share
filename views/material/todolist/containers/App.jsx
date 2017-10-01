import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  addTodo, completeTodo,
  setVisibilityFilter, deleteTodo,
  searchTodo, VisibilityFilters,
  fetchPosts, selectSubreddit,
  fetchPostsIfNeeded, invalidateSubreddit
} from '../actions'
import AddTodo from '../components/AddTodo'
import SearchTodo from '../components/SearchTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import Axios from 'axios'

/** 容器型组件 接受store传递过来的state和dispatch
 *  需要把处理store传递过来的state，把真正用到的数据才传递给展示组件（木偶组件）
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleOnTodoClick = this.handleOnTodoClick.bind(this);
    this.handleOnFilterChange = this.handleOnFilterChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOnSearchTodo = this.handleOnSearchTodo.bind(this);
    this.webCallback = this.webCallback.bind(this);
    this.axiosRequest = this.axiosRequest.bind(this);
    this.postData = this.postData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  /* 组件第一次加载完成时调用 */
  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
    // this.axiosRequest();
    // debugger
      //传统ajax请求 http原生方法
      var url = 'https://61.178.60.228:21900/api/trade/ptjy/ptyw/zjcx';
      // var xhr = new XMLHttpRequest();
      var params = JSON.stringify({"hbdm":"","khbz":"101500000010","khbzlx":"Z","jymm":"123123","sessionid":"0","token":"0","yybdm":"1015","lhxx":"123"});
      // xhr.open('POST', url);
      // xhr.responseType = 'json';

      // xhr.onload = function() {
      //   console.log(xhr.response);
      //   console.log("success callback");
      // };

      // xhr.onerror = function() {
      //   console.log("Oops, error");
      // };

      // xhr.send(params);
      let myInit = {
            method: 'POST',
            // mode: 'same-origin',
            mode: 'cors',
            body: params,
            headers: {
                'Content-Type': 'application/json'
            }
      };
      // fetch(url, myInit).then(res=>{ // 取数据
      //       return res.json(); // 用json()设置相应的数据
      //   }).then(data=>{ //处理数据
      //       this.webCallback(data);
      //       console.log('资金数据: ', data);
      //   }).catch(err=>console.log(err));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit));
  }

  handleRefreshClick(e) {
    e.preventDefault();
    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  //基于promise的http请求
  axiosRequest() {
    var url = 'https://61.178.60.228:21900/api/trade/ptjy/ptyw/zjcx';
    var params = JSON.stringify({"hbdm":"","khbz":"101500000010","khbzlx":"Z","jymm":"123123","sessionid":"0","token":"0","yybdm":"1015","lhxx":"123"});
    Axios.post(url, params)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  webCallback(response) {
    console.log('哈哈，我拿到数据了', response);
  }

  /*
   * 处理AddTodo的dispatch
  */
  handleAddTodo(text) {
    this.props.dispatch(addTodo(text));
  }

  /*
   * 处理onTodoClick的dispatch
  */
  handleOnTodoClick(index) {
    this.props.dispatch(completeTodo(index));
  }

  /*
   * 处理onFilterChange的dispatch
  */
  handleOnFilterChange(nextFilter) {
    this.props.dispatch(setVisibilityFilter(nextFilter));
  }

  /*
   * 处理onDelete的dispatch
  */
  handleDelete(index) {
    this.props.dispatch(deleteTodo(index));
  }

  /*
   * 处理onSearchTodo的dispatch
  */
  handleOnSearchTodo(text) {
    let newTodos = this.props.visibleTodos.filter((item, index) => {
      return item['text'].indexOf(text) > -1;
    });
    this.props.dispatch(searchTodo(newTodos));
  }

  postData() {
    this.props.dispatch(fetchPosts('reactjs'));
  }

  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter, postDatas, selectedSubreddit, posts, isFetching, lastUpdated, params } = this.props
    return (
      <div>
        <AddTodo
          onAddClick={ this.handleAddTodo
          } />
        <SearchTodo onSearchTodo={this.handleOnSearchTodo}
        />
        <TodoList
          todos={visibleTodos}
          filter={params.filter || 'all'}
          onTodoClick={ this.handleOnTodoClick
          }
          onDelete={this.handleDelete} />
        <Footer
          filter={visibilityFilter}
          onFilterChange={ this.handleOnFilterChange
          } />
          <button onClick={this.postData}>dispatch</button>
          <div>
            <Picker value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}
             />
            <p>
              {lastUpdated &&
                <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}</span>
              }
              {!isFetching &&
                <a href="#" onClick={this.handleRefreshClick}>
                  Refresh
                </a>
              }
            </p>
            {isFetching && posts.length === 0 &&
              <h2>Loading...</h2>}
            {!isFetching && posts.length === 0 &&
              <h2>Empty.</h2>
            }
            {posts.length > 0 &&
              <div style={{opacity: isFetching ? 0.5 : 1}}>
                <Posts posts={posts} />
              </div>
            }
          </div>
          {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired,
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

// 应用connect方法前需要计算出要注入到展示组件的props
// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function mapStateToProps (state, ownProps) {
  console.log('哈哈: ', state, ownProps);
  const { visibilityFilter, selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }
  const filter = ownProps.params.filter || 'SHOW_ALL'
  return {
    visibleTodos: selectTodos(state.todos, filter),
    visibilityFilter, // visibilityFilter: state.visibilityFilter
    postDatas: state.postsData.receivePosts,
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

// 注入展示组件的props中，作为一个回调方法
function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: (text) => { dispatch(addTodo(text)) }
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(mapStateToProps)(App)
