export default function(state = {}, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state, loginInfo: action.payload
      };
    default:
      return state;
  }
}
