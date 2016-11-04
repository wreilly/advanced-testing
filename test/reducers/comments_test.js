/*
Test for REDUCER:
1) That the default state isn't changed ( ? )
2) Each possible Action
*/

import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown (or no) type!', () => {
    // respond with empty array in that case...
    // Pass to reducer: 1) state, 2) action
    // const wtf = commentsReducer();
    const wtf = commentsReducer(undefined, {});
    console.log("WR__ wtf commentsReducer ", wtf);
    // expect(wtf).to.equal(undefined); // yep
    // expect(wtf).to.equal([]); // nope. don't use 'equal' on objects, arrays (unless you say to.deep.equal)
    expect(wtf).to.eql([]); // Yes! :) EQL is DEEP ARRAY comparison
    expect(wtf).to.be.an.instanceOf(Array); // Yes :)
  });

  it('handles action of type SAVE_COMMENT', () => {
  // it('SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'test comment from a payload you know'
    }
    // expect(commentsReducer(['testing comment one'], SAVE_COMMENT)).to.eql(['testing comment one']); // YEP.
    // Hmm. O.K., we pass in "initial state" (of empty array, I guess):
    expect(commentsReducer([], action)).to.eql(['test comment from a payload you know']);
  });
});
