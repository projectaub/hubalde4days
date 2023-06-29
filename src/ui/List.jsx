import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_TODO, SWITCH_TODO } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const List = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Link to={`/${todo.id}`}>상세보기</Link>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <p>{todo.contents}</p>
            <p>{todo.isDone.toString()}</p>
            <button
              onClick={() => {
                dispatch({
                  type: DELETE_TODO,
                  payload: todo.id,
                });
              }}
            >
              삭제
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: SWITCH_TODO,
                  payload: todo.id,
                });
              }}
            >
              완료
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
