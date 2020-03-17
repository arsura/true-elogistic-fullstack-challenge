import jwtDecode from 'jwt-decode';
import * as auth from '../redux/actions/auth';

export default function setUser(dispatch) {
  if (localStorage.token) {
    const decode = jwtDecode(localStorage.token);
    dispatch(auth.setCurrentUser(decode));
  }
}