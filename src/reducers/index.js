import { combineReducers} from 'redux'
import users from './user'

const reducers  = combineReducers({
    user: users
})

export default reducers
