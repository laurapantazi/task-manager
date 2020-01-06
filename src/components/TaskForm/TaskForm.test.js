import {TaskForm} from './TaskForm'
import React from 'react'
import renderer from 'react-test-renderer'

it('TaskForm render correctly', () => {
  const tree = renderer.create(<TaskForm add addTask={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})