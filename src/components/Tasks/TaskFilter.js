import React, {Component} from 'react'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { FilterTasks } from '../../store/constants/ActionTypes'
import { setFilterTask } from '../../store/actions'

class TaskFilter extends Component {
  render() {
    return(
      <Nav fill variant="tabs">
        <Nav.Item>
          <Nav.Link onClick={this.handleClick} name={FilterTasks.SHOW_ALL}>ALL</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.handleClick} name={FilterTasks.SHOW_TODO}>TODO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={this.handleClick} name={FilterTasks.SHOW_IN_PROGRESS}>IN PROGRESS</Nav.Link>
        </Nav.Item> 
        <Nav.Item>
          <Nav.Link onClick={this.handleClick} name={FilterTasks.SHOW_COMPLETED}>COMPLETED</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }

  handleClick = e => {
    e.preventDefault()
    this.props.setFilterTask(e.target.name)
  }
}
export default connect(null, { setFilterTask })(TaskFilter)