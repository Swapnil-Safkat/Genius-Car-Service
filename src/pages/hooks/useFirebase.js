import {useEffect, useState} from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from 'firebase/auth';
import auth from "../../Firebase.init";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [errorText, setErrorText] = useState('');
  // keep an eye if any user sign in or out and update the user
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user);
    })
  }, [])

  const GoogleSignIn = event => {
    console.log('what')
    event.preventDefault();
    signInWithPopup(auth, googleProvider).then(res => setUser(res.user)).catch(error => setErrorText(error.message));
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {console.log('signed out')}).catch(e => setErrorText(e.message));
  }

  return {
    user,
    setUser,
    errorText,
    GoogleSignIn,
    handleSignOut
  };
}
export default useFirebase
