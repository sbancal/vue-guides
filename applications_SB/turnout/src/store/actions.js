import * as types from './mutation-types'

export const signIn = ({commit}, userPayload) => {
  commit(types.SIGN_IN, userPayload)
}
