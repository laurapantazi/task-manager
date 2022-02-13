import configureStore from 'redux-mock-store'

const mockConfigureStore = configureStore();

export default function mockStore (initialState) {
  return mockConfigureStore(initialState)
}