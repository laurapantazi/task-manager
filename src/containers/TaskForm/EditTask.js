/*eslint eqeqeq: "off"*/
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { editTask } from 'store/actions'
import {TaskForm} from 'components/TaskForm/TaskForm'
import { Redirect } from 'react-router-dom'

class EditTask extends Component {
  constructor (props) {
    super(props)
    this.state = {id: this.props.match.params.id}
  }
  render () {
    let taskExists = this.props.tasks.find(task => task.id == this.state.id)
    if (taskExists) {
      return (
        <TaskForm edit task={taskExists} editTask={this.props.editTask} />
      )
    } else {
      return (<Redirect to="/404" />)
    }
  }
}

function mapStateToProps (state) {
  return {tasks: state.tasks}
}
export default connect(mapStateToProps, { editTask })(EditTask)
