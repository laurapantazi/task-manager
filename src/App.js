import React, {Component} from 'react'
import './App.css'
import TaskForm from './components/TaskForm/TaskForm'
import Tasks from './components/Tasks/Tasks'
import Container from 'react-bootstrap/Container'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  render () {
    return (
      <Container className="App">
        <TaskForm></TaskForm>
        <hr />
        <Tasks></Tasks>
      </Container>
    )
  }
}
