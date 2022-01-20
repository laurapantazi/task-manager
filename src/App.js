import React, {Component, Suspense, lazy} from 'react'
import {Container, Row, Col, Navbar, Nav, Spinner} from 'react-bootstrap'
import { Switch, Route, BrowserRouter as Router, NavLink, Redirect } from 'react-router-dom'
import './App.css'
const AddTask = lazy(() => import('./containers/TaskForm/AddTask'))
const EditTask = lazy(() => import('./containers/TaskForm/EditTask'))
const Tasks = lazy(() => import('./containers/Tasks/Tasks'))
const About = lazy(() => import('./containers/About/About'))
const NotFound = lazy(() => import('./containers/NotFound/NotFound'))
const UploadTask = lazy(() => import('./containers/UploadTask/UploadTask'))

export default class App extends Component {
  render () {
    return (
      <Suspense fallback={
        <Container fluid style={{maxWidth: '100vw', height: '100vh'}}>
          <Row style={{height: '100%',justifyContent: 'center', alignItems: 'center'}}>
            <Col style={{textAlign: 'center'}}>
            <Spinner animation="border" role="status">
            </Spinner>
          </Col>
        </Row>
      </Container>}>
      <Router>
        <Navbar expand="lg" bg="dark" variant="dark" style={{background: '#618B45', color: '#fff', marginBottom: '40px'}}>
          <Navbar.Brand>Task</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/">About</Nav.Link>
              <Nav.Link as={NavLink} to="/create">Create Task</Nav.Link>
              <Nav.Link as={NavLink} to="/tasks">Tasks</Nav.Link>
              <Nav.Link as={NavLink} to="/upload">Upload Task</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Container className="App">
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/create" component={AddTask} />
            <Route path="/tasks/:id" component={EditTask} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/upload" component={UploadTask} />
            <Route name="404" path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </Container>
      </Router>
      </Suspense>
    )
  }
}
