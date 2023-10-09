import React, { useState } from 'react';
//import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from "../../firebaseConfig";


const Login: React.FC = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

              const signIn = (e:any) => {
                e.preventDefault();
                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    console.log(userCredential);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              };

  return (
    <div>
     <form>
      <h1 style={{ color: 'white' }}>Login Thing</h1>
      <input type="email" placeholder= "Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="password" placeholder= "Enter your Password"  value={password} onChange={(e) => setPassword(e.target.value)}></input>
      <button type ="submit">Log In</button>
     </form>
    </div>
  );
};

export default Login;
