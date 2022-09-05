import { useState, useEffect, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../context/notificationContext";

function Comments(props) {
  const { eventId } = props;
  const notificaitonCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch("/api/comments/" + eventId)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.data);
        });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    notificaitonCtx.showNotification({
      title: "Adding...",
      message: `Adding your comment`,
      status: `pending`,
    });

    // send data to API
    try {
      const res = await fetch(`/api/comments/${eventId}`, {
        method: "POST",
        body: JSON.stringify(commentData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      notificaitonCtx.showNotification({
        title: "Success",
        message: `Added Successfully`,
        status: `success`,
      });
      console.log(data);
    } catch (error) {
      notificaitonCtx.showNotification({
        title: "Error",
        message: `Error while adding your Comment`,
        status: `error`,
      });
    }
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList list={comments} />}
    </section>
  );
}

export default Comments;
