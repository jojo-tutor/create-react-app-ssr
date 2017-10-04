export default function reducer(state={
    customers: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_CUSTOMER": {
        return {...state, fetching: true}
      }
      case "FETCH_VALIDATE_CUSTOMER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_VALIDATE_CUSTOMER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          customers: action.payload,
        }
      }
      case "FETCH_CUSTOMERS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_CUSTOMERS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          customers: action.payload,
        }
      }
      case "FETCH_ONE_CUSTOMER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ONE_CUSTOMER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          customers: action.payload,
        }
      }
      case "SET_CUSTOMER_NAME": {
        return {
          ...state,
          customers: {...state.customers, name: action.payload},
        }
      }
      case "SET_CUSTOMER_AGE": {
        return {
          ...state,
          customers: {...state.customers, age: action.payload},
        }
      }
      case "ADD_CUSTOMER": {
        return {
          ...state,
          customers: [...state.customers, action.payload],
        }
      }
      case "UPDATE_CUSTOMER": {
        const { id } = action.payload
        const newCustomers = [...state.customers]
        const customerToUpdate = newCustomers.findIndex(customer => customer.id === id)
        newCustomers[customerToUpdate] = action.payload;

        return {
          ...state,
          customers: newCustomers,
        }
      }
      case "DELETE_CUSTOMER": {
        return {
          ...state,
          customers: state.customers.filter(customer => customer.id !== action.payload),
        }
      }
      default:
        break;
    }

    return state
}
