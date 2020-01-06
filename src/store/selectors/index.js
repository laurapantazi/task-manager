/*eslint eqeqeq: "off"*/
import { FilterTasks } from '../../store/constants/ActionTypes'

export const getTaskById = (tasks, id) => {
  return tasks.find(task => task.id == id)
}

export const selectFilteredTasks = (tasks, filter) => {
  switch (filter) {
    case FilterTasks.SHOW_ALL:
      return tasks
    case FilterTasks.SHOW_TODO:
      return tasks.filter(x => x.status === 'TODO')
    case FilterTasks.SHOW_IN_PROGRESS:
      return tasks.filter(x => x.status === 'IN PROGRESS')
    case FilterTasks.SHOW_COMPLETED:
      return tasks.filter(x => x.status === 'COMPLETED')
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}