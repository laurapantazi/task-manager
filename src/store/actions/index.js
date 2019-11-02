import { 
  ADD_TASK,
  START_TASK,
  FINISH_TASK,
  SET_FILTER,
  DELETE_TASK
} from '../constants/ActionTypes'

let nextTaskId = 0
export const addTask = (description, category, duration, priority, points) => ({
  type: ADD_TASK,
  id: ++nextTaskId,
  description,
  category,
  duration,
  priority,
  points
})

export const startTask = id => ({
  type: START_TASK,
  id
})

export const finishTask = id => ({
  type: FINISH_TASK,
  id
})

export const setFilterTask = filter =>  ({
  type: SET_FILTER,
  filter
})

export const deleteTask = id =>  ({
  type: DELETE_TASK,
  id
})