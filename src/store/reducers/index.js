import { combineReducers } from 'redux'
import tasks from './tasks'
import filterTasks from './filterTasks'

const tasksApp = combineReducers({
  tasks,
  filterTasks
})

export default tasksApp