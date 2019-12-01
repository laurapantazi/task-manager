import React, { Component } from 'react'
import { Form, Button, Col, InputGroup, FormControl, ListGroup } from 'react-bootstrap'

export default class UploadTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      taskCount: 1,
      errors: null
    }
  }
  render () {
    return (
      <div className="container uploadTask">
        <Form onSubmit={this.handleSubmit}>
        {this.state.errors}
          <Form.Row  className="justify-content-md-center">
            <Form.Group as={Col} xs={3} controlId="formGridPoints">
              <Form.Label>Number of tasks</Form.Label>
              <Form.Control type="number" name="taskCount" value={this.state.taskCount} placeholder="Type number" onChange={this.handleInputChange}/>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit" value="ok">
            Upload
          </Button>
        </Form>
      </div>

    )
  }
  handleInputChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit: ', this.state.taskCount)
  }

}