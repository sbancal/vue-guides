import * as types from './mutation-types'

export const mutations = {
  [types.SIGN_IN] (state, userPayload) {
    state.user = userPayload
  },
  [types.SIGN_OUT] (state) {
    state.user = {}
  },
  [types.SET_EVENTS] (state, eventsPayload) {
    state.events = eventsPayload
  }
}
