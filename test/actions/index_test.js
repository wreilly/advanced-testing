import { expect } from '../test_helper';

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

// Testing actions (that get returned) correct type, and payload

describe('actions!', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = {
        type: SAVE_COMMENT,
        payload: { comment: 'Foist'}
      };
      expect(action.type).to.equal('save_comment');
    });
    it('has the correct payload', () => {

    });
  });
});
