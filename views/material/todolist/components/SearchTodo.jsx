import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SearchTodo extends Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={(e) => this.handleClick(e)}>search</button>
            </div>
        )
    }

    handleClick(e) {
        console.log('search');
        let node = this.refs.input;
        let text = node.value.trim();
        this.props.onSearchTodo(text);
        node.value = '';
    }
}

SearchTodo.propTypes = {
    onSearchTodo: PropTypes.func.isRequired
}
