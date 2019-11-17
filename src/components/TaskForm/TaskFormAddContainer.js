import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../store/actions'
import {TaskFormComponent} from './TaskFormComponent'

class TaskFormAddContainer extends Component {
  render () {
    return (
      <TaskFormComponent add addTask={this.props.addTask} />
    )
  }
}
export default connect(null, { addTask })(TaskFormAddContainer)