import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import {login, logout} from './features/userSlice';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user >>", authUser)
      if(authUser) {
        // the user is logged in 

        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
     } else {
      //   the user is logged out
      dispatch(logout({

      }))
     }
    })
  }, [dispatch])

  return (
    <div className="app">
    {user ? (
      <>
      <Sidebar/>
     <Chat/>
     </>
    ): (
      <Login/>
    )}
     
    </div>
  );
}

export default App;
