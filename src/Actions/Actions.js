//this is a syncronous action so thunk will not interfer
export const deleteData = () => {
  return {
    type: "DELETE_DATA",
  };
};
//this is a asyncronos action so we can dispatch action manually
export const addData = () => {
  return async (dispatch, getstate) => {
    // Fetching results from an API : asynchronous action
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    // Dispatching the action when async
    // action has completed.

    dispatch({
      type: "ADD_DATA",
      payload: data,
    });
  };
};
