import { combineReducers } from 'redux'
import tasks from './tasks'
import filterTasks from './filterTasks'
import uploadTaskStatus from './uploadTask'

const tasksApp = combineReducers({
  tasks,
  filterTasks,
  uploadTaskStatus

})

export default tasksApp