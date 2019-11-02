import React, {Component} from 'react'
import { Form, Button, Col, InputGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addTask } from '../../store/actions'

class TaskForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      description: '',
      category: '',
      duration: '',
      priority: '',
      points: '',
      status: false,
    }
  }

  handleInputChange = (event) => {
    const {value, name} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let {description, category, duration, priority, points, status} = this.state
    this.props.addTask(description, category, duration, priority, points, status)
    this.setState({ description: '', category: '', duration: '', priority: '', points: ''})
  }

  render () {
    return (
      <div className="container taskList">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formPlaintextDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" value={this.state.description} placeholder="Type description" onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Group controlId="formPlaintextCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" name="category" value={this.state.category} placeholder="Type category" onChange={this.handleInputChange} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridDuration">
              <Form.Label>Duration</Form.Label>
              <InputGroup>
              <Form.Control type="number" name="duration" value={this.state.duration} placeholder="Type duration" onChange={this.handleInputChange} />
              <InputGroup.Append>
                <InputGroup.Text id="inputGroupPrepend">minutes</InputGroup.Text>
              </InputGroup.Append>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select" name="priority" value={this.state.priority} onChange={this.handleInputChange}>
                <option>Choose Priority</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPoints">
              <Form.Label>Points</Form.Label>
              <Form.Control type="number" step="5" name="points" value={this.state.points} placeholder="Type points" onChange={this.handleInputChange}/>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, { addTask })(TaskForm)