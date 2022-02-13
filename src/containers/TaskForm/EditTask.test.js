import React from 'react'
import { shallow } from 'enzyme'
import EditTask from './EditTask'
import { FilterTasks, UploadTaskStatus, EDIT_TASK } from '../../store/constants/ActionTypes'
import { editTask } from '../../store/actions'
import mockStore from '../../Utils/mockStore'

describe('Form renders correctly', () => {
  const dummyTask = {
    description: 'Do the dishes',
    category: 'KITCHEN',
    duration: 30,
    priority: 'medium',
    points: 10 ,
    id: 1
  }
  const initialState = {
    tasks: dummyTask,
    filterTasks: FilterTasks.SHOW_ALL,
    uploadTaskStatus: UploadTaskStatus.IN_PROGRESS
  }
  let store, wrapper
  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<EditTask store={store}/>)
  })

  it('should render Edit Task component', () => {
    expect(wrapper.length).toEqual(1)
  })

  it("should match actions", () => {
    let action
    store.dispatch(editTask(dummyTask))
    action = store.getActions()
    expect(action[0].type).toBe(EDIT_TASK)
  })

  it("should match props", () => {
    expect(wrapper.find('EditTask').props().tasks).toEqual(dummyTask)
  })
})