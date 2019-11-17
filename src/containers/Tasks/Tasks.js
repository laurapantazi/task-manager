import React, {Component, Fragment} from 'react'
import TaskData from 'containers/Tasks/TaskData'
import TaskFilter from 'containers/Tasks/TaskFilter'

class Tasks extends Component {
  render() {
    return(
      <Fragment>
        <TaskFilter></TaskFilter>
        <TaskData></TaskData>
      </Fragment>
    )
  }

}
export default Tasks