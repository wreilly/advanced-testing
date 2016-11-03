import React, { Component } from 'react';


// Controlled component
export default class CommentBox extends Component {

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

    // We do nothing (for now) but clear the textarea field:
    this.setState( { comment: '' });
  }

  render() {
    return (
      // Just a naming convention, this class "comment-box" to match Component CommentBox. Cheers.
      // Now our whole component will be a form, not div
      // <div className="comment-box">
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
        <button action="submit">Drink Me</button>
      </form>
    )
  }
}
