import React from 'react'
import { shallow } from 'enzyme'
import AddTask from './AddTask'
import configureStore from 'redux-mock-store'
import { FilterTasks, UploadTaskStatus, ADD_TASK } from '../../store/constants/ActionTypes'
import { addTask } from '../../store/actions'

describe('AddTask renders correctly', () => {
  const initialState = {
    tasks: [],
    filterTasks: FilterTasks.SHOW_ALL,
    uploadTaskStatus: UploadTaskStatus.IN_PROGRESS
  }
  const mockStore = configureStore()
  let store, wrapper
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<AddTask store={store} />)
  })


  it('should render Add Task component', () => {
    expect(wrapper.length).toEqual(1)
  })
  it("should match actions", () => {
    let action
    const dummyTask = {
      description: 'Do the dishes',
      category: 'KITCHEN',
      duration: 30,
      priority: 'medium',
      points: 10
    }
    store.dispatch(addTask(dummyTask))
    action = store.getActions()
    expect(action[0].type).toBe(ADD_TASK)
  })
})