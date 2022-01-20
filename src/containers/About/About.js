import React, {Component} from 'react'

export default class About extends Component {
  render () {
    return (
      <div>
        <h3>About Page</h3>
        <p>
        This project was build in order to get familiar with React and Redux.
        </p>
        <p>
        More specifically, it's an app that you can create new tasks, and watch their progress.
        Each task must have at least description and category.
        Optionally you can define a priority, duration and the number of points gained after completion.
        </p>
      </div>
    )
  }
}