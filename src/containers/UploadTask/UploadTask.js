import React, { Component } from 'react'
import { Form, Button, Col, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { uploadTask } from 'store/actions'
import {UploadTaskStatus } from 'store/constants/ActionTypes'
class UploadTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      taskCount: 1
    }
  }
  render () {
    return (
      <div className="container uploadTask">
      {this.props.status === UploadTaskStatus.SUCCESSFUL && <Alert variant='success'>Uploaded successfully</Alert>}
      {this.props.status === UploadTaskStatus.FAILED && <Alert variant='danger'>An error occured while uploading tasks</Alert>}
        <Form onSubmit={this.handleSubmit}>
          <Form.Row className="justify-content-md-center">
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
    if (this.state.taskCount) {
      this.props.uploadTask(this.state.taskCount)
    }
  }
}

function mapStateToProps(state) {
  return {status: state.uploadTaskStatus}
}

export default connect(mapStateToProps, {uploadTask })(UploadTask)