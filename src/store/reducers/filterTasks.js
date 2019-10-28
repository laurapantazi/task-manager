import { FilterTasks } from '../constants/ActionTypes'

const filterTasks = (state = FilterTasks.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export default filterTasks