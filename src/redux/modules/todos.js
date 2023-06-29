import shortid from "shortid";

// action value
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const SWITCH_TODO = "SWITCH_TODO";

// 초기값

const initialState = [
  {
    id: shortid.generate(),
    title: "제목",
    contents: "내용",
    isDone: false,
  },
];

//리듀서

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case SWITCH_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todos;
