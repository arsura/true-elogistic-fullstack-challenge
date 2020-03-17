import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

export default function(ComposedComponent) {
  function Authenticate() {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
      redirect();
    }, []);

    function redirect() {
      if (auth.isAuthenticated === false) {
        dispatch(push('/login'));
      }
    }

    return auth.isAuthenticated && <ComposedComponent />;
  }

  return Authenticate;
}
