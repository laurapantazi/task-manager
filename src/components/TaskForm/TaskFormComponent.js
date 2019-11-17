import React, {Component} from 'react'
import { Form, Button, Col, InputGroup, FormControl, ListGroup } from 'react-bootstrap'
import PropTypes from 'prop-types'

export class TaskFormComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: null,
      description: '',
      category: '',
      duration: '',
      priority: '',
      points: '',
      status: false,
      errors: []
    }
  }
  componentDidMount () {
    if (this.props.editTask) {
      this.setState({
        id: this.props.task.id,
        description: this.props.task.description,
        category: this.props.task.category,
        duration: this.props.task.duration,
        priority: this.props.task.priority,
        points: this.props.task.points,
        status: this.props.task.status,
      })
    }
  }
  handleInputChange = (event) => {
    const {value, name} = event.target
    this.setState({
      [name]: value
    })
  }

  formHasErrors = () => {
    this.setState({errors: []})
    let {description, category} = this.state
    let errors = []
    if (!description) {
      errors.push('Task description is required')
    }
    if (!category) {
      errors.push('Task category is required')
    }
    if (errors.length) {
      this.setState(previousState => ({
        errors: [...previousState.errors, ...errors]
      }))
      return true
    } else {
      return false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let {id, description, category, duration, priority, points, status} = this.state
    if (!this.formHasErrors()) {
      if (this.props.editTask) {
        this.props.onSave(id, description, category, duration, priority, points, status)
      } else {
        this.props.onSave(description, category, duration, priority, points, status)
        this.setState({ description: '', category: '', duration: '', priority: '', points: ''})
      }
    }
  }

  showErrors () {
    return this.state.errors.map((error, index) => {
      return (
        <ListGroup.Item as="li" variant="danger" key={index}>
          {error}
        </ListGroup.Item>
      )
    })
  }
  render () {
    return (
      <div className="container taskList">
        <ListGroup as="ul">
          {this.showErrors()}
        </ListGroup>
        <Form onSubmit={this.handleSubmit}>
        {this.state.errors.description}
          <Form.Group controlId="formPlaintextDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="description" value={this.state.description} placeholder="Type description" onChange={this.handleInputChange} />
            <FormControl.Feedback>
              {this.state.errors.description}
            </FormControl.Feedback>
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

TaskFormComponent.propTypes = {
  edit: PropTypes.bool,
  add: PropTypes.bool,
  task: PropTypes.object,
  editTask: PropTypes.func,
  addTask: PropTypes.func 
}