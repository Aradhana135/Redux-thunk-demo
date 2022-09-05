const { act } = require("@testing-library/react");
const { combineReducers } = require("redux");
const INITIAL_STATE = {
  todo: null,
};
const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, todo: action.payload };
    case "DELETE_DATA":
      return INITIAL_STATE;
    default:
      return state;
  }
};

const reducers = combineReducers({ data: dataReducer });
export default reducers;
