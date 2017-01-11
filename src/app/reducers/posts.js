import deepMerge from 'deepmerge'
import * as postsActions from 'app/actions/posts'

const defaultState = {
  data: {}
}

export default function posts (state = defaultState, action) {
  switch (action.type) {
    case `${postsActions.FETCH_POST}_PENDING`:
    case `${postsActions.FETCH_POSTS}_PENDING`: {
      return {
        data: {
          ...state.data
        },
        isFetching: true
      }
    }
    case `${postsActions.FETCH_POST}_FULFILLED`:
    case `${postsActions.FETCH_POSTS}_FULFILLED`: {
      return {
        data: deepMerge(
          state.data,
          action.payload.entities.items
        ),
        isFulfilled: true
      }
    }
    case `${postsActions.FETCH_POST}_REJECTED`:
    case `${postsActions.FETCH_POSTS}_REJECTED`: {
      return {
        data: {
          ...state.data
        },
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}
