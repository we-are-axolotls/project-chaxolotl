/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import ChatBoxReducer from './ChatBoxReducer';

// combine all the reducers and make it available through store.grades
const reducers = combineReducers({
  chatbox: ChatBoxReducer
});

export default reducers;