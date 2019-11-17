import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTask } from 'store/actions'
import {TaskForm} from 'components/TaskForm/TaskForm'

class AddTask extends Component {
  render () {
    return (
      <TaskForm add addTask={this.props.addTask} />
    )
  }
}
export default connect(null, { addTask })(AddTask)