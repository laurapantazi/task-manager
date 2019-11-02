import { ADD_TASK, START_TASK, FINISH_TASK, DELETE_TASK } from '../constants/ActionTypes'

const tasks = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
          category: action.category,
          duration: action.duration,
          priority: action.priority,
          points: action.points,
          status: 'TODO'
        }
      ]
    case START_TASK:
      return state.map(task => 
        (task.id === action.id) ? {...task, status: 'IN PROGRESS'} : task)
    case FINISH_TASK:
      return state.map(task => 
        (task.id === action.id) ? {...task, status: 'COMPLETED'} : task)
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id)
    default:
      return state
  }
}

export default tasks