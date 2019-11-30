import { 
  ADD_TASK,
  START_TASK,
  FINISH_TASK,
  SET_FILTER,
  DELETE_TASK,
  EDIT_TASK,
  FilterTasks
} from '../constants/ActionTypes'
import { 
  addTask,
  startTask,
  finishTask,
  setFilterTask,
  deleteTask,
  editTask
} from './index'

describe('App actions', () => {
  describe('addTask', () => {
    it('should create ADD_TASK action', () => {
      const expectedResult = {
        type: ADD_TASK,
        description: 'Do the dishes',
        category: 'KITCHEN',
        duration: 30,
        priority: 'medium',
        points: 10 ,
        id: 1}
      const description = 'Do the dishes'
      const category = 'KITCHEN'
      const duration = 30
      const priority = 'medium'
      const points = 10
      expect(addTask(description, category, duration, priority, points)).toEqual(expectedResult)
    })
  })

  describe('startTask', () => {
    it('should create START_TASK action', () => {
      const expectedResult = {
        type: START_TASK,
        id: 4}
      expect(startTask(4)).toEqual(expectedResult)
    })
  })
  describe('finishTask', () => {
    it('should create FINISH_TASK action', () => {
      const expectedResult = {
        type: FINISH_TASK,
        id: 4}
      expect(finishTask(4)).toEqual(expectedResult)
    })
  })
  describe('setFilterTask', () => {
    it('should create SET_FILTER action', () => {
      const expectedResult = {
        type: SET_FILTER,
        filter: FilterTasks.SHOW_ALL}
      expect(setFilterTask(FilterTasks.SHOW_ALL)).toEqual(expectedResult)
    })
  })
  describe('deleteTask', () => {
    it('should create DELETE_TASK action', () => {
      const expectedResult = {
        type: DELETE_TASK,
        id: 4}
      expect(deleteTask(4)).toEqual(expectedResult)
    })
  })
  describe('editTask', () => {
    it('should create EDIT_TASK action', () => {
      const expectedResult = {
        type: EDIT_TASK,
        description: 'Do the dishes',
        category: 'KITCHEN',
        duration: 30,
        priority: 'medium',
        points: 10 ,
        id: 1}
      const description = 'Do the dishes'
      const category = 'KITCHEN'
      const duration = 30
      const priority = 'medium'
      const points = 10
      const id = 1
      expect(editTask(id, description, category, duration, priority, points)).toEqual(expectedResult)
    })
  })
})