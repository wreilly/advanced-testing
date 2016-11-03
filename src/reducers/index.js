import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  /* 'state' was default. Hmmph. We change it to 'comments' that our code expects, and we make state initially an array not object. Sheesh.
  */
  // state: (state = {}) => state
  comments: (state = []) => state
});

export default rootReducer;
