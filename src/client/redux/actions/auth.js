export function setCurrentUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
}

export function loginSucceeded(user) {
  return {
    type: 'LOGIN_SUCCEEDED',
    user
  };
}

export function loginFailed(error) {
  return {
    type: 'LOGIN_FAILED',
    error
  };
}