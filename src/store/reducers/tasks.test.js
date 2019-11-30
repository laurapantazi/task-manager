import { 
  ADD_TASK,
  START_TASK,
  FINISH_TASK,
  DELETE_TASK,
  EDIT_TASK
} from '../constants/ActionTypes'
import tasks from './tasks'

describe('App task reducer', () => {
  it('should handle initial state', () => {
    expect(tasks(undefined, {})).toEqual([])
  })

  it('should handle ADD_TASK', () => {
    const newTask = {
      type: ADD_TASK,
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20
    }
    const expectedResult = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'TODO'
    }]
    expect(tasks([], newTask)).toEqual(expectedResult)

    expect(tasks([{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'TODO'
    }],{
      type: ADD_TASK,
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'High',
      points: 15
    })).toEqual([{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'TODO'
    },{
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'High',
      points: 15,
      status: 'TODO'
    }])
  })

  it('should handle START_TASK', () => {
    const state = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'TODO'
    }]
    const expectedResult = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    }]
    expect(tasks(state, { type: START_TASK, id: 1 })).toEqual(expectedResult)
  })

  it('should handle FINISH_TASK', () => {
    const state = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    },{
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'High',
      points: 15,
      status: 'IN PROGRESS'
    }]
    const expectedResult = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    },{
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'High',
      points: 15,
      status: 'COMPLETED'
    }]
    expect(tasks(state, { type: FINISH_TASK, id: 2 })).toEqual(expectedResult)
  })

  it('should handle DELETE_TASK', () => {
    const state = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    },{
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'High',
      points: 15,
      status: 'COMPLETED'
    }]
    const expectedResult = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    }]
    expect(tasks(state, { type: DELETE_TASK, id: 2 })).toEqual(expectedResult)
  })

  it('should handle EDIT_TASK with ', () => {
    const state = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'Low',
      points: 20,
      status: 'IN PROGRESS'
    },{
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'Low',
      points: 15,
      status: 'COMPLETED'
    }]
    const editTask = {
      type: EDIT_TASK,
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    }
    const expectedResult = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    },{
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'Low',
      points: 15,
      status: 'COMPLETED'
    }]
    expect(tasks(state, editTask)).toEqual(expectedResult)
  })

    it('should handle EDIT_TASK', () => {
    const state = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'Low',
      points: 20,
      status: 'IN PROGRESS'
    },{
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'Low',
      points: 15,
      status: 'COMPLETED'
    }]
    const editTask = {
      type: EDIT_TASK,
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    }
    const expectedResult = [{
      id: 1,
      description: 'Clean the bathroom',
      category: 'Bathroom',
      duration: 40,
      priority: 'High',
      points: 20,
      status: 'IN PROGRESS'
    },{
      id: 2,
      description: 'Clean the kitchen',
      category: 'Kitchen',
      duration: 25,
      priority: 'Low',
      points: 15,
      status: 'COMPLETED'
    }]
    expect(tasks(state, editTask)).toEqual(expectedResult)
  })
})