import {combineReducers} from 'redux';

import {AppReducer} from './AppReducers';
import {UserReducer} from './UserReducers';

export default combineReducers({AppReducer, UserReducer});
