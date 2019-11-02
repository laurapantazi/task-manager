import React from 'react'
import { Button, Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

const TaskTable = function ({tasks, startTask, finishTask, deleteTask}) {
  let item = tasks.map((task) => {
    return(
      <tr key={task.id}>
        <td>{task.id}</td>
        <td>{task.description}</td>
        <td>{task.category}</td>
        <td>{task.duration}</td>
        <td>{task.priority}</td>
        <td>{task.points}</td>
        <td>{task.status}</td>
        <td>
          <Button variant="outline-primary" onClick={() => startTask(task.id)}>In Progress</Button>
          <Button variant="outline-success" onClick={() => finishTask(task.id)}>Done</Button>
          <Button variant="outline-danger" onClick={() => deleteTask(task.id)}>Delete</Button>
        </td>
      </tr>
     )
  })

  if (tasks.length) {
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
          {item}
        </tbody>
      </Table>
    )
  } else {
    return (
      <p>Nothing found</p>
    )
  }
}
TaskTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  startTask: PropTypes.func.isRequired,
  finishTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
}
export default TaskTable