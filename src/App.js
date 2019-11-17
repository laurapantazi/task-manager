import React, {Component} from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import { Switch, Route, BrowserRouter as Router, NavLink, Redirect } from 'react-router-dom'
import './App.css'
import AddTask from 'containers/TaskForm/AddTask'
import EditTask from 'containers/TaskForm/EditTask'
import Tasks from 'containers/Tasks/Tasks'
import About from 'containers/About/About'
import NotFound from 'containers/NotFound/NotFound'

export default class App extends Component {
  render () {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Task</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/">About</Nav.Link>
              <Nav.Link as={NavLink} to="/create">Create Task</Nav.Link>
              <Nav.Link as={NavLink} to="/tasks">Tasks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Container className="App">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/create" component={AddTask} />
            <Route path="/tasks/:id" component={EditTask} />
            <Route exact path="/tasks" component={Tasks} />
            <Route name="404" path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Container>
      </Router>
    )
  }
}
