const dataState = {
  data: null,
  start_date: '',
  end_date: '',
  dates: {},
};

function dataReducer(state = dataState, action) {
  switch (action.type) {
    case "armonapi":
      return {
        ...state,
        start_date: state.start_date,
        end_date: state.end_date
      };
    case "start_date": 
      return {
        start_date: action.payload
      }
    case "end_date":
      return {
        end_date: action.payload
      }
    case "logoapi":
      return {
        logoapi: action.payload,
      };

    case "users":
      return {
        users: action.payload,
      };
    default:
      return state;
  }
}

export default dataReducer;
