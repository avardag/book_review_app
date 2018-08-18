export default function(state = {}, action) {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        ...state, loginData: action.payload
      };
    case "USER_AUTH_CHECK":
      return {
        ...state, userAuthData: action.payload
      };
    default:
      return state;
  }
}
