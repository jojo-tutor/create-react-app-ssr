export default function reducer(state={
    pets: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_PET": {
        return {...state, fetching: true}
      }
      case "FETCH_PETS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PETS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          pets: action.payload,
        }
      }
      case "FETCH_AVAILABLE_PETS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_AVAILABLE_PETS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          pets: action.payload,
        }
      }
      case "FETCH_OUTOFSTOCK_PETS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_OUTOFSTOCK_PETS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          pets: action.payload,
        }
      }
      case "SET_PET_NAME": {
        return {
          ...state,
          pets: {...state.pets, name: action.payload},
        }
      }
      case "SET_PET_AGE": {
        return {
          ...state,
          pets: {...state.pets, age: action.payload},
        }
      }
      case "ADD_PET": {
        return {
          ...state,
          pets: [...state.pets, action.payload],
        }
      }
      case "UPDATE_PET": {
        const { id } = action.payload
        const newPets = [...state.pets]
        const petToUpdate = newPets.findIndex(pet => pet.id === id)
        newPets[petToUpdate] = action.payload;

        return {
          ...state,
          pets: newPets,
        }
      }
      case "UPDATE_PET_STATUS": {
        const { id } = action.payload
        const newPets = [...state.pets]
        const petToUpdate = newPets.findIndex(pet => pet.id === id)
        newPets[petToUpdate] = action.payload;

        return {
          ...state,
          pets: newPets,
        }
      }
      case "DELETE_PET": {
        return {
          ...state,
          pets: state.pets.filter(pet => pet.id !== action.payload),
        }
      }
      default:
        break;
    }

    return state
}
