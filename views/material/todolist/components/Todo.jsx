import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
  render() {
    return (
      <li
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer',
          listStyle: 'none'
        }}>
        <span onClick={this.props.onClick}>{`(${this.props.id})`}</span>
        <span onClick={this.props.onClick} style={{marginLeft: '20px'}}>{this.props.text}</span>
        <button style={{marginLeft: '20px'}} onClick={this.props.handleDelete}>delete</button>
      </li>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}
