import { 
  ADD_TASK,
  START_TASK,
  FINISH_TASK,
  SET_FILTER,
  DELETE_TASK,
  EDIT_TASK,
  UPLOAD_TASK,
  UploadTaskStatus
} from '../constants/ActionTypes'
import axios from 'axios'

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

export const uploadTaskStatus = status => ({
  type: UPLOAD_TASK,
  status
})

export const editTask = (id, description, category, duration, priority, points) => ({
  type: EDIT_TASK,
  id,
  description,
  category,
  duration,
  priority,
  points
})

export const uploadTask = numberOfTasks => {
  return dispatch => {
    axios.get(`https://my.api.mockaroo.com/tasks/${numberOfTasks}.json?key=9c0bb4c0`)
      .then(res => {
        dispatch(uploadTaskStatus(UploadTaskStatus.SUCCESSFUL))
        if (numberOfTasks > 1) {
          for (let i = 0; i < res.data.length; i++) {
            const {description, category, duration, priority, points} = res.data[i]
            dispatch(addTask(description, category, duration, priority, points))
          }
        } else {
          const {description, category, duration, priority, points} = res.data
          dispatch(addTask(description, category, duration, priority, points))
        }
      })
      .catch(err => {
        dispatch(uploadTaskStatus(UploadTaskStatus.FAILED))        
      })
  }
}