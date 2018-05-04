export default function reducer(state={
    list: { data: [], total: 0 },
    data: null,
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case 'FETCH_USER_LIST': {
        return {...state, fetching: true, list: action.payload }
      }
      case 'FETCH_USER_DETAILS': {
        return {...state, fetching: true}
      }
      case 'ADD_USER': {
        return {
          ...state,
          users: [...state.users, action.payload],
        }
      }
      case 'UPDATE_USER': {
        const { id } = action.payload
        const newUsers = [...state.users]
        const customerToUpdate = newUsers.findIndex(customer => customer.id === id)
        newUsers[customerToUpdate] = action.payload;

        return {
          ...state,
          users: newUsers,
        }
      }
      case 'DELETE_USER': {
        const newUsers = state.users.filter(customer => customer.id !== action.payload)
        return {
          ...state,
          users: newUsers,
        }
      }
      default:
        return { ...state }
    }
}
