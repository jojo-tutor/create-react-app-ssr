export default function reducer(state={
    orders: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ORDER": {
        return {...state, fetching: true}
      }
      case "FETCH_ORDERS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ORDERS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          orders: action.payload,
        }
      }
      case "SET_ORDER_NAME": {
        return {
          ...state,
          orders: {...state.orders, name: action.payload},
        }
      }
      case "SET_ORDER_AGE": {
        return {
          ...state,
          orders: {...state.orders, age: action.payload},
        }
      }
      case "ADD_ORDER": {
        return {
          ...state,
          orders: [...state.orders, action.payload],
        }
      }
      case "UPDATE_ORDER": {
        const { id } = action.payload
        const newOrders = [...state.orders]
        const orderToUpdate = newOrders.findIndex(order => order.id === id)
        newOrders[orderToUpdate] = action.payload;

        return {
          ...state,
          orders: newOrders,
        }
      }
      case "DELETE_ORDER": {
        return {
          ...state,
          orders: state.orders.filter(order => order.id !== action.payload),
        }
      }
      default:
        break;
    }

    return state
}
