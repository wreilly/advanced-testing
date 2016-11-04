import React, { Component } from 'react';

// MAKE THIS A CONTAINER "smart component"
// ... Lecture 20 ~2:01
import { connect } from 'react-redux';

// Shortcut for mapDispatchToProps
import * as actions from '../actions';

// Controlled component
// export default class CommentBox extends Component
class CommentBox extends Component {

  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState( { comment: event.target.value });
  }

  handleSubmit(event) {
    // Keep the default HTML behavior from happening: browser would call server to process form, on submit.
    event.preventDefault();


    this.props.saveComment(this.state.comment);

    // We do nothing (for now) but clear the textarea field:
    this.setState( { comment: '' });
  }

  render() {
    return (
      // Just a naming convention, this class "comment-box" to match Component CommentBox. Cheers.
      // Now our whole component will be a form, not div
      // <div className="comment-box">
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Comment Time, People!</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
        <div>
          <button action="submit">Drink Me</button>
        </div>
      </form>
    )
  }
}


/* NOPE! !!! Not using: mapStateToProps
For this component, we care about the ACTION creator, NOT the state. (sigh)
So we do mapDispatchToProps instead.
(And in fact we do a "shortcut" on that ... see below)
*/
// function mapStateToProps (state) {
//   return (
//     {
//       comment: state.comment
//       // comments: state.comments // ?
//     }
//   )
// }

/* In lieu of mapDispatchToProps()
Here's a shortcut:
- Import * from actions (above)
- then: Automatically binds ALL actions to our component
*/
export default connect(null, actions)(CommentBox);
