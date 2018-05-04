import { createSelector } from 'reselect'

export const user_selector = createSelector(
  state=> state.user,
  state=> state.error,
  (user, error)=> {
    return {
      user: {
        data: user.data,
        list: user.list
      },
      error: error.data
    }
  }
)
