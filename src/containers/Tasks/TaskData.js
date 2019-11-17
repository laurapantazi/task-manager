import {connect} from 'react-redux'
import TaskTable from 'components/Tasks/TaskTable'
import { startTask, finishTask, deleteTask, setFilterTask } from 'store/actions'
import { selectFilteredTasks } from 'store/selectors'

function mapStateToProps(state) {
  return {
    tasks: selectFilteredTasks(state.tasks, state.filterTasks)
  }
}

export default connect(mapStateToProps, { startTask, finishTask, deleteTask, setFilterTask })(TaskTable)