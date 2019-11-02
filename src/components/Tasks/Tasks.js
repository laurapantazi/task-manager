import React, {Component, Fragment} from 'react'
import TaskData from './TaskData'
import TaskFilter from './TaskFilter'

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