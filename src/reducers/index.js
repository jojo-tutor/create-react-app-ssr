import { combineReducers } from "redux"

import pets from "./petReducer"
import customers from "./customerReducer"
import orders from "./orderReducer"
import sales from "./salesReducer"

export default combineReducers({
  pets,
  customers,
  orders,
  sales
})
