module.exports = {
  fetchUserList(data) {
    return {
      type: 'FETCH_USER_LIST_PROCESSING',
      payload: data
    }
  },

  FetchUserDetails(id) {
    return {
      type: 'FETCH_USER_DETAILS_PROCESSING',
      payload: id
    }
  },

  AddUser(data) {
    return {
      type: 'ADD_USER_PROCESSING',
      payload: data
    }
  },

  UpdateUser(id) {
    return {
      type: 'UPDATE_USER_PROCESSING',
      payload: id
    }
  },

  DeleteUser(id) {
    return {
      type: 'DELETE_USER_PROCESSING',
      payload: id
    }
  },

  
}
