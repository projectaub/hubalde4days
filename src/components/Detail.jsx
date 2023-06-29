import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Todocomment from "./Todocomment";

const Detail = () => {
  const todo = useSelector((state) => state.todos);
  console.log("todo=>", todo);
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      {todo
        .filter((todo) => {
          return todo.id === id;
        })
        .map((todo) => {
          return (
            <div>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.contents}</p>
              <p>{todo.isDone.toString()}</p>
            </div>
          );
        })}
      <div>
        <Todocomment />
      </div>
    </div>
  );
};

export default Detail;
