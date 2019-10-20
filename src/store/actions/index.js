import { ADD_TASK, START_TASK, FINISH_TASK } from '../constants/ActionTypes'

let nextTaskId = 0
export const addTask = (description, category, duration, priority, points, status) => ({
  type: ADD_TASK,
  id: nextTaskId++,
  description,
  category,
  duration,
  priority,
  points,
  status
})

export const startTask = (id) => ({
  type: START_TASK,
  id
})

export const finishTask = (id) => ({
  type: FINISH_TASK,
  id
})