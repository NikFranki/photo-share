import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, deleteTodo, searchTodo, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo'
import SearchTodo from '../components/SearchTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleOnTodoClick = this.handleOnTodoClick.bind(this);
    this.handleOnFilterChange = this.handleOnFilterChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOnSearchTodo = this.handleOnSearchTodo.bind(this);
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

  render() {
    // Injected by connect() call:
    console.log(this.props);
    const { dispatch, visibleTodos, visibilityFilter } = this.props

    return (
      <div>
        <AddTodo
          onAddClick={ this.handleAddTodo
          } />
        <SearchTodo onSearchTodo={this.handleOnSearchTodo}
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={ this.handleOnTodoClick
          }
          onDelete={this.handleDelete} />
        <Footer
          filter={visibilityFilter}
          onFilterChange={ this.handleOnFilterChange
          } />
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
  ]).isRequired
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
function mapStateToProps (state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
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
