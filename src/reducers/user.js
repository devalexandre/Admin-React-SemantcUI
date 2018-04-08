import { AUTH } from '../actions/login'

export default function (state = [] , actions) {

  switch (actions) {
    case AUTH:
      return [...state,actions.payload]
      break;
    default:
    return state

  }

}
