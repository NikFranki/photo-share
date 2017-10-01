import React from 'react'
import { Link } from 'react-router'

const FilterLink = ({ filter, children, onFilter }) => (
    <a href={`#/${filter === 'SHOW_ALL' ? '' : filter}`} onClick={(filter) => onFilter(filter)} activeStyle={{textDecoration: 'none', color: 'black'}}>
        {children}
    </a>
)

export default FilterLink;
