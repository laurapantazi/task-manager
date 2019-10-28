import React, {Component, Fragment} from 'react'
import { Table, Button, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { FilterTasks } from './store/constants/ActionTypes'
import { startTask, finishTask, setFilterTask } from './store/actions'

class TaskList extends Component {
  render() {
    return(
      <Fragment>
        <Nav fill variant="tabs">
          <Nav.Item>
            <Nav.Link onClick={this.handleClick} name={FilterTasks.SHOW_ALL}>{FilterTasks.SHOW_ALL}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={this.handleClick} name={FilterTasks.SHOW_TODO}>{FilterTasks.SHOW_TODO}</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={this.handleClick} name={FilterTasks.SHOW_IN_PROGRESS}>{FilterTasks.SHOW_IN_PROGRESS}</Nav.Link>
          </Nav.Item> 
          <Nav.Item>
            <Nav.Link onClick={this.handleClick} name={FilterTasks.SHOW_COMPLETED}>{FilterTasks.SHOW_COMPLETED}</Nav.Link>
          </Nav.Item>
        </Nav>
        {this.createTable()}
      </Fragment>
    )
  }

  handleClick = e => {
    e.preventDefault()
    this.props.setFilterTask(e.target.name)
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
        <p>Nothing found</p>
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
          <td>
            <Button variant="outline-primary" onClick={() => this.props.startTask(task.id)}>In Progress</Button>
            <Button variant="outline-success" onClick={() => this.props.finishTask(task.id)}>Done</Button>
          </td>
        </tr>
      )
    })
  }
}
function filteredTasks (tasks, filter) {
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
function mapStateToProps (state) {
  return {
    tasks: filteredTasks(state.tasks, state.filterTasks)
  }
}

export default connect(mapStateToProps, { startTask, finishTask, setFilterTask })(TaskList)