import classes from "./comment-list.module.css";

function CommentList(props) {
  const { list } = props;
  return (
    <ul className={classes.comments}>
      {list?.map((el) => (
        <li key={el.id}>
          <p>{el.comment}</p>
          <div>
            By <address>{el.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
