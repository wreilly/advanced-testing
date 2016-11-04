import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

/* This component (list of comments) will need data: props.
How to get?
The helper 'renderComponent' helps ...
*/
describe('CommentList', () => {
  let component; // changing up..

  beforeEach( () => {
    const props = { comments: [ 'Comment da foist', 'Remarks upon remarks', 'yadda' ] };
    // We pass our just-made PROPS (for testing) in to our helper renderComponent
    // I guess this one (LIST) does not need app-level state ... ?
    // I think in the real component (not this testing bit), we get the Props FROM state (mapStateToProps), fwiw. But here, we are not passing IN state. all right.
    component = renderComponent(CommentList, null, props);
  });

  it('shows in <li> for each comment', () => {
    // jQuery returns array apparently of all <li> found
    expect(component.find('li').length).to.equal(3);
  });

// also 'text' or 'html' etc. ...
  it('shows each comment that is provided', () => {
    expect(component).to.contain('Comment da foist');
    expect(component).to.contain('Remarks upon remarks');
    expect(component).to.contain('yadda');
  });

});
