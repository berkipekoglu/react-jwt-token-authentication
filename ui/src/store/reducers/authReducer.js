const initalState = {
  count: 0,
};

function authReducer(state = initalState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.payload,
      };
    default:
      return state;
  }
}

export default authReducer;