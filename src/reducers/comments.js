import { SAVE_COMMENT } from '../actions/types';

// REDUCER: always same/similar signature:
// Our state is array (for those comments....)
export default function(state = [], action) {
  // hmm, what is default 'return' here, if no action, or 'foobar' action ? [] ? undefined
  // return state;

  // Defend against use case in Test 1 - "no action"
  // Actually, we changed the test to be not quite so bald & empty:
  /*     // Pass to reducer: 1) state, 2) action
      // const wtf = commentsReducer(); // << WAS
      const wtf = commentsReducer(undefined, {}); // << NOW IS
  So we don't need the defensive 'if' any longer
  */
  // if (!action) {
  //   return state;
  // }

  switch(action.type) {
    case SAVE_COMMENT:
      // SAME LOGIC! as the ES6 "destructuring" below...
      // return state.concat([action.payload]);
      return [ ...state, action.payload];
    default:
      return state;
  }

}
