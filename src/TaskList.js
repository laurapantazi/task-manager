import React, {Component, Fragment} from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

class TaskList extends Component {
  render() {
    return(
      <Fragment>
        {this.createTable()}
      </Fragment>
    )
  }

  createTable () {
    if (this.props.tasks.length) {
      return (
        <Table className="taskList" responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Description</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Priority</th>
              <th>Points</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.createList()}
          </tbody>
        </Table>
      )
    } else {
      return (
        <p>No tasks for today</p>
      )
    }
  }
  createList () {
    return this.props.tasks.map((task) => {
      return (
        <tr key={task.id}>
          <td>{task.id}</td>
          <td>{task.description}</td>
          <td>{task.category}</td>
          <td>{task.duration}</td>
          <td>{task.priority}</td>
          <td>{task.points}</td>
          <td>{task.status}</td>
          <td></td>
        </tr>
      )
    })
  }
}
function mapStateToProps (state) {
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(TaskList)