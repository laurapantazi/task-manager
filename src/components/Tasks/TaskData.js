import {connect} from 'react-redux'
import TaskTable from './TaskTable'
import { startTask, finishTask, setFilterTask } from '../../store/actions'
import { FilterTasks } from '../../store/constants/ActionTypes'

function selectFilteredTasks (tasks, filter) {
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

function mapStateToProps(state) {
  return {
    tasks: selectFilteredTasks(state.tasks, state.filterTasks)
  }
}

export default connect(mapStateToProps, { startTask, finishTask, setFilterTask })(TaskTable)