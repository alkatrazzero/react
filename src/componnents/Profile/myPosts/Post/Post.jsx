import React from "react";
import s from "../Post/Post.module.css";
const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.post}
        src="https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
      />
      {props.message}
      <div>
        <span>
          <button onClick>{props.like}</button>
        </span>
      </div>
    </div>
  );
};
export default Post;
