import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase/auth';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const Home = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(auth?.currentUser?.email)

  // Login with email and password
  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.log(err)
    }
  }

  // Login with google account
  const handleLoginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.log(err)
    }
  }

  // This function is used for logout
  const handleLogout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <>
      <input type="text" name="username" placeholder='Enter email ...'
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder='Enter password ...'
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>click</button>
      <br />
      <button onClick={handleLoginWithGoogle}>Login With google</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home