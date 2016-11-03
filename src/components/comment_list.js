// 1. Hmm, "to begin" (?) = FUNCTIONAL Component
// NO NEED FOR STATE, REDUX ( ? )
// import React, { Component } from 'react';

/* 2. Later, (waah?), we NOW do expect to get our list of comments from Application-Level state - so, we do need to turn this into a CONTAINER.
A React component that has access to App-Level state through Redux.
We use connect from react-redux
*/

import React from 'react';
import { connect } from 'react-redux';


// export default class CommentList extends Component {
const CommentList = (props) => {
  console.log("WR__ 01 props? ", props); //  { comments: undefined, dispatch: [Function: dispatch] }

  const list = props.comments.map( comment => <li key={comment}>{comment}</li>);

  return (
    <div className="comment-list">
      <div className="innerish-throwaway">
        <p>List of Comments</p>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log("WR__ 00 state? ", state); // { state: {} }
  return { comments: state.comments}; // undefined (till we do the reducer!)
}

// mapStateToProps() is first arg to connect()
export default connect(mapStateToProps)(CommentList);
