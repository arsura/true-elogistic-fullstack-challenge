const initialState = {
  isAuthenticated: false,
  user: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        isAuthenticated: Object.keys(action.user).length > 0,
        user: action.user.email
      };
    case 'LOGIN_SUCCEEDED':
      return {
        isAuthenticated: true,
        user: action.user.email
      };
    case 'LOGIN_FAILED':
      return {
        isAuthenticated: false,
        user: null,
        error: action.error
      };
    default:
      return state;
  }
};
