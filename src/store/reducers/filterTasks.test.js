import {
  FilterTasks
} from '../constants/ActionTypes'
import filterTasks from './filterTasks'

describe('App filterTasks reducer', () => {
  it('should handle initial state', () => {
    expect(filterTasks(undefined, 'SET_FILTER')).toEqual(FilterTasks.SHOW_ALL)
  })

  it('should handle SET_FILTER', () => {
    expect(filterTasks(FilterTasks.SHOW_ALL, 'SET_FILTER')).toEqual(FilterTasks.SHOW_ALL)
    expect(filterTasks(FilterTasks.SHOW_TODO, 'SET_FILTER')).toEqual(FilterTasks.SHOW_TODO)
    expect(filterTasks(FilterTasks.SHOW_IN_PROGRESS, 'SET_FILTER')).toEqual(FilterTasks.SHOW_IN_PROGRESS)
    expect(filterTasks(FilterTasks.SHOW_COMPLETED, 'SET_FILTER')).toEqual(FilterTasks.SHOW_COMPLETED)
    expect(filterTasks(FilterTasks.SHOW_ALL, 'ABC')).toEqual(FilterTasks.SHOW_ALL)  
  })
})