import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shortid from "shortid";
import { ADD_TODO } from "../redux/modules/todos";

const Form = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [contents, setContens] = useState("");
  console.log(todos);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: ADD_TODO,
            payload: { id: shortid.generate(), title, contents, isDone: false },
          });
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={contents}
          onChange={(e) => {
            setContens(e.target.value);
          }}
        />
        <button>작성</button>
      </form>
    </div>
  );
};

export default Form;
