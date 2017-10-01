import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

export default class Footer extends Component {
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return name
    }

    return (
      <a href='#' onClick={e => {
        e.preventDefault()
        this.props.onFilterChange(filter)
      }}>
        {name}
      </a>
    )
  }

  RenderTodos(filter) {
    this.props.onFilterChange(filter);
  }

  render() {
    return (
      <p>
        Show:
        {' '}
        <FilterLink filter="SHOW_ALL" onFilter={this.RenderTodos.bind(this)}>
          All
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_COMPLETED" onFilter={this.RenderTodos.bind(this)}>
          Completed
        </FilterLink>
        {', '}
        <FilterLink filter="SHOW_ACTIVE" onFilter={this.RenderTodos.bind(this)}>
          Active
        </FilterLink>
        .
      </p>
    )
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}
