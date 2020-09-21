import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestComments } from "../../actions/comments_actions";
import CommentItem from "./comment_item";

const CommentsIndex = ({ comments, routeId, requestComments }) => {
  useEffect(() => {
    requestComments(routeId);
  }, [])

  return (
    <div>
      {
        comments.map(comment => <CommentItem key={comment.id} comment={comment} />)
      }
    </div>
  )
}

const mSTP = state => {
  return {
    comments: state.entities.comments ? Object.values(state.entities.comments) : []

  }
}

const mDTP = dispatch => ({
  requestComments: (routeId) => dispatch(requestComments(routeId))
})

export default connect(mSTP, mDTP)(CommentsIndex);