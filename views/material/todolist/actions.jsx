/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DELETE_TODO = 'DELETE_TODO';
export const SEARCH_TODO = 'SEARCH_TODO'


/*
 * 其它的常量
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */

// export function addTodo(text) {
//   return { type: ADD_TODO, text }
// }

// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index }
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter }
// }

// export function deleteTodo(index) {
//     return {type: DELETE_TODO, index}
// }

// export function searchTodo(todos) {
//     return {type: SEARCH_TODO, todos}
// }

/*
 * action creator函数
*/
function makeActionCreator(type, ...argNames) {
    return function(...args) {
        let action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        })
        console.log(action);
        return action
    }
}

// {type: "ADD_TODO", text: "11"}
export const addTodo = makeActionCreator(ADD_TODO, 'text')

// {type: "COMPLETE_TODO", index: 0}
export const completeTodo = makeActionCreator(COMPLETE_TODO, 'index')

// {type: "SET_VISIBILITY_FILTER", filter: "SHOW_ALL"}
export const setVisibilityFilter = makeActionCreator(SET_VISIBILITY_FILTER, 'filter')

// {type: "DELETE_TODO", index: 0}
export const deleteTodo = makeActionCreator(DELETE_TODO, 'index')

// {type: "DELETE_TODO", index: 0}
export const searchTodo = makeActionCreator(SEARCH_TODO, 'todos')
