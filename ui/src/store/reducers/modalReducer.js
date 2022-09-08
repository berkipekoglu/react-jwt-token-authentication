const tokenState = {
    modal: false,
    data: null
  };
  
  function modalReducer(state = tokenState, action) {
    switch (action.type) {
      case "open":
        return {
          modal: action.payload.modal,
          data: action.payload.data
        };
      case "close":
        return {
            modal: action.payload.modal,
        };
      default:
        return state;
    }
  }
  
  export default modalReducer;