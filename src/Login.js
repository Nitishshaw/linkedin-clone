import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userauth) => {
        dispatch(
          login({
            email: userauth.user.email,
            uid: userauth.user.uid,
            displayName: userauth.user.displayName,
            photoURL: userauth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("please enter a full name !");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userauth) => {
        userauth.user
          .updateProfile({
            displayName: name,
            photoURL: profilepic,
          })
          .then(() => {
            dispatch(
              login({
                email: userauth.user.email,
                uid: userauth.user.uid,
                displayName: userauth.user.displayName,
                photoURL: profilepic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        src="data:image/png;base64,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"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (require if registering)"
          type="text"
        />
        <input
          value={profilepic}
          onChange={(e) => setProfilepic(e.target.value)}
          placeholder="profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
