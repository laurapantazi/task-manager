# React Project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
This project was build in order to get familiar with React and Redux.
More specifically, it's an app that you can create new tasks, and watch their progress. Each task must have at least description and category. Optionally you can define a priority, duration and the number of points gained after completion.

* `/create` Create new tasks and store them in store
* `/tasks` View all tasks or use a filter to only view completed, in progress or todo tasks
* `/tasks/:id` View existing task and modify task fields
* `/upload/` Upload desired amount of tasks from a fake API
* `/about` About page
* `/404` Not found page

A fake API was created with Mockaroo.com in order to generate fake tasks and import them into redux store.

## Features
* [x] React
* [x] Redux
* [x] Redux-Thunk
* [x] React Router
* [x] React-Bootstrap
* [x] Jest

## Getting Started
Clone or download repository

### Install dependencies
`npm install` or `yarn install`

### Start server
`npm start` or `yarn start`

### Start tests
`npm test` or `yarn test`

### Build
`npm run build` or `yarn run build`

### Eject
`npm run eject` or `yarn run eject`
