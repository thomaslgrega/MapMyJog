import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { requestComments, createComment } from "../../actions/comments_actions";
import CommentItem from "./comment_item";

const CommentsIndex = ({ currentUser, comments, routeId, requestComments, createComment }) => {
  const [body, setBody] = useState('');
  useEffect(() => {
    requestComments(routeId);
  }, [])

  const addComment = () => {
    const comment = {
      author_id: currentUser,
      route_id: routeId,
      body
    }

    createComment(comment)
  }

  return (
    <div className="comments-container">
      <span className="comments-count">{comments.length} Comments</span>
      <textarea className="comments-textarea" cols="30" rows="2" wrap="hard" value={body} placeholder='Add a comment' onChange={e => setBody(e.target.value)}></textarea>
      <button className="add-comment-btn" onClick={addComment}>Comment</button>
      {
        comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
      }
    </div>
  )
}

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  comments: state.entities.comments ? Object.values(state.entities.comments).reverse() : []
})

const mDTP = dispatch => ({
  requestComments: (routeId) => dispatch(requestComments(routeId)),
  createComment: comment => dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(CommentsIndex);