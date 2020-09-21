import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteComment, updateComment } from "../../actions/comments_actions";
import { requestUser } from "../../actions/user_actions";

const CommentItem = ({ currentUser, users, comment, requestUser, deleteComment }) => {
  useEffect(() => {
    requestUser(comment.author_id)
  }, [])

  const authorName = users[comment.author_id] ? users[comment.author_id].first_name : null;
  const authorId = users[comment.author_id] ? users[comment.author_id].id : null;

  const parseDate = () => {
    let dateStr = comment.created_at.slice(0, 10);
    dateStr = dateStr.split('-');
    return `${dateStr[1]}/${dateStr[2]}/${dateStr[0]}`
  }

  const deleteButton = currentUser.id === authorId ? (
    <button onClick={() => deleteComment(comment.id)}>Delete</button>
  ) : null

  const showCommentDropdown = e => {
    const allDropdowns = Array.from(document.querySelectorAll(".comment-dropdown"));
    allDropdowns.forEach(dropdown => {
      if (dropdown !== e.target.children[0]) {
        dropdown.classList.remove("show")
      }
    })
    
    e.target.children[0].classList.toggle("show");
  }

  return (
    <div className="comment-div">
      <div className="comment-header">
        <Link to={`/users/${authorId}`}>{authorName}</Link>
        <span>{parseDate()}</span>
        <span className="fas fa-ellipsis-v" onClick={showCommentDropdown}>
          <div className="comment-dropdown">
            {deleteButton}
          </div>
        </span>
      </div>
      <span>{comment.body}</span>
    </div>
  )
}

const mSTP = state => {
  return { 
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
  }  
}

const mDTP = dispatch => ({
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  requestUser: userId => dispatch(requestUser(userId))
})

export default connect(mSTP, mDTP)(CommentItem);