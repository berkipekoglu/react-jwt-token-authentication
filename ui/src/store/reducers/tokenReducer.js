const tokenState = {
  token: null,
};

function tokenReducer(state = tokenState, action) {
  switch (action.type) {
    case "login":
      return {
        token: action.payload,
      };
    case "logout":
      return {
        token: action.payload,
      };
    default:
      return state;
  }
}

export default tokenReducer;