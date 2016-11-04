import { expect } from '../test_helper';

import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

// Testing actions (that get returned) correct type, and payload

describe('actions!', () => {
  describe('saveComment', () => {
    it('has the correct type (kinda hard-coded WR__)', () => {
      const action = {
        type: SAVE_COMMENT,
        payload: { comment: 'Foist'}
      };
      expect(action.type).to.equal('save_comment');
    });

    it('has the correct type (perfesser code, calls action creator)', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const newComment = 'how are you, mr. new?'
      const action = saveComment(newComment);
      expect(action.payload).to.equal('how are you, mr. new?');
    });
  });
});
