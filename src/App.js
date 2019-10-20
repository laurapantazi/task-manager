import React, {Component} from 'react'
import './App.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
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
        <TaskList></TaskList>
      </Container>
    )
  }
}
