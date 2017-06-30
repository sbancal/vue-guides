// Grab a random joke!
// https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke
//
// Grab ten random jokes!
// https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten

import * as types from './mutation-types'

export const initJokes = ({commit}) => {
  fetch('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(json => commit(types.INIT_JOKES, json))
}
