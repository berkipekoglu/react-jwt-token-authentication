const tokenState = {
  username: null,
  password: null,
  token: null,
  refresh: null
};

function tokenReducer(state = tokenState, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        token: action.payload.token,
        refresh: action.payload.refresh,
        username: action.payload.username,
        password: action.payload.password
      }
    case "logout":
      return {
        token: '',
      };
    default:
      return state;
  }
}

export default tokenReducer;