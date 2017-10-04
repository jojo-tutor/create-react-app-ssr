export default function reducer(state={
    sales: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_SALE": {
        return {...state, fetching: true}
      }
      case "FETCH_SALES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_SALES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          sales: action.payload,
        }
      }
      case "SET_SALE_NAME": {
        return {
          ...state,
          sales: {...state.sales, name: action.payload},
        }
      }
      case "ADD_SALE": {
        return {
          ...state,
          sales: [...state.sales, action.payload],
        }
      }
      case "UPDATE_SALE": {
        const { id } = action.payload
        const newOrders = [...state.sales]
        const saleToUpdate = newOrders.findIndex(sale => sale.id === id)
        newOrders[saleToUpdate] = action.payload;

        return {
          ...state,
          sales: newOrders,
        }
      }
      case "DELETE_SALE": {
        return {
          ...state,
          sales: state.sales.filter(sale => sale.id !== action.payload),
        }
      }
      default:
        break;
    }

    return state
}
