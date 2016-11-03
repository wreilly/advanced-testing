import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox tests ...', () => {

  // LET. A variable you expect to change over time .... !
  let component; // undefined

  beforeEach( () => {
    // const component = renderComponent(CommentBox);
    // remove: const, since the let above...
    component = renderComponent(CommentBox);
  });

  it('has the correct class name on top div', () => {
    // const component = renderComponent(CommentBox);

    // Nope: expect(component.find('div')).to.have.class('comment-box');
    expect(component).to.have.class('comment-box');
  });

  it('has a textarea', () => {
    // Returns a jQuery object!
    // const component = renderComponent(CommentBox);

    expect(component.find('textarea')).to.exist; // no final parens()
  });

  it('has a button', () => {
    // const component = renderComponent(CommentBox);

    expect(component.find('button')).to.exist;

  });

  // NESTED DESCRIBE:
  describe('entering some text! ...', () => {

    // A "LOCAL" (nested) beforeEach()
    beforeEach( () => {
      // See TEST_HELPER for simulate() :o)
      component.find('textarea').simulate('change', 'new comment guy!');
     });

    it('shows text that is entered, guy!', () => {
      expect(component.find('textarea')).to.have.value('new comment guy!');
    });

    it('when submitted, clears the input', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });


});
