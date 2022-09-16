const dataState = {
  data: []
};

function dataReducer(state = dataState, action) {
  switch (action.type) {
    case "data":
      return {
        data: action.payload
      };
    default:
      return state;
  }
}

export default dataReducer;
