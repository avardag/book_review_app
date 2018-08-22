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
    case "GET_USER_REVIEWS":
      return {
        ...state, userReviews: action.payload
      };
    case "GET_USERS":
      return {
        ...state, foundUsers: action.payload
      };
    case "USER_REGISTER":
      return {
        ...state,
         userRegistered: action.payload.success,
         foundUsers: action.payload.users
      };
    default:
      return state;
  }
}
