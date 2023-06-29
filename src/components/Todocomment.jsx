import React, { useState } from "react";
import { useSelector } from "react-redux";

const Todocomment = () => {
  const comments = useSelector((state) => state.comments);
  console.log(comments);
  const [commentTitle, setCommentTitle] = useState("");
  const [commentContents, setCommenContents] = useState("");

  return (
    <div>
      <h2>댓글</h2>
      <form>
        <input
          type="text"
          value={commentTitle}
          onChange={(e) => {
            setCommentTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={commentContents}
          onChange={(e) => {
            setCommenContents(e.target.value);
          }}
        />
        <button>작성</button>
      </form>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Todocomment;
