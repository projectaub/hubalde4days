import shortid from "shortid";

// action value
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const SWITCH_COMMENT = "SWITCH_COMMENT";

// 초기값

const initialState = [];

//리듀서

const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.payload];
    case DELETE_COMMENT:
      return state.filter((todo) => todo.id !== action.payload);
    case SWITCH_COMMENT:
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

export default comments;
