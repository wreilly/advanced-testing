import { combineReducers } from 'redux';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  /* 'state' was default. Hmmph. We change it to 'comments' that our code expects, and we make state initially an array not object. Sheesh.
  */
  // state: (state = {}) => state
  // comments: (state = []) => state
  comments: commentsReducer // recall, this thing returns an ARRAY. Gwoovy.
});

export default rootReducer;
