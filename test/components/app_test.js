import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Group together similar tests
describe('App (string simply!)', () => {

  let component; // undefined

  beforeEach( () => {
    component = renderComponent(App);
  });

  // Test a single attribute of a target
  it('should show the correct text (string simply!)', () => {

    // create an instance of App
    // const myComponent = renderComponent(App);

    // Make an assertion about a target
    // expect(myComponent).to.contain('React simple starter');
    expect(component).to.contain('React simple starter');

  });

  // CHILD component. CommentBox inside App
  // Test for the FINAL - rendered HTML
  it('shows a comment box!', () => {

    // jQuery obj has find(), accepts CSS selector:
    expect(component.find('.comment-box')).to.exist;
  });

  it('has a child component with class "comment-box" ', () => {
    expect(component.find('form')).to.have.class('comment-box');
  });

  it('has a child component with class "comment-list" ', () => {
    expect(component.find('div')).to.have.class('comment-list');
    // expect(component.find('.comment-list')).to.exist; // Works!
  });

});
