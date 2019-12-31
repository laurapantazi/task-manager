import { UPLOAD_TASK, UploadTaskStatus } from '../constants/ActionTypes'

const uploadTaskStatus = (state = UploadTaskStatus.IN_PROGRESS, action) => {
  switch (action.type) {
    case UPLOAD_TASK:
      return action.status
    default:
      return state
  }
}

export default uploadTaskStatus