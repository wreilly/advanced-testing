// 1. Hmm, "to begin" (?) = FUNCTIONAL Component
// So, we just import React, not { Component }
// NO NEED FOR STATE, REDUX ( ? )
// import React, { Component } from 'react';

/* 2. Later, (waah?), we NOW do expect to get our list of comments from Application-Level state - so, we do need to turn this into a CONTAINER.
A React component that has access to App-Level state through Redux.
We use connect from react-redux
(N.B. We still don't import React.Component. We don't extend the class Component.)
*/

import React from 'react';
import { connect } from 'react-redux';


// export default class CommentList extends Component {
const CommentList = (props) => {
  // console.log("WR__ 01 props? ", props);
  /* WR__ 01 props?  { comments: [ 'Comment da foist', 'Remarks upon remarks', 'yadda' ],
  dispatch: [Function: dispatch] }
  */

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
  // console.log("WR__ 00 state? ", state);
  // WR__ 00 state?  { comments: {} }
  /* WR__ 00 state?  { comments: [ 'Comment da foist', 'Remarks upon remarks', 'yadda' ] }
  */
  return { comments: state.comments}; // undefined (till we do the reducer!)
}

// mapStateToProps() is first arg to connect()
export default connect(mapStateToProps)(CommentList);
