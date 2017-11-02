export default function reducer(state={
    data: null,
    error: false,
  }, action) {

    switch (action.type) {
      case 'ERROR': {
        return { ...state, error: true }
      }
      default:
        return { ...state }
    }
}
