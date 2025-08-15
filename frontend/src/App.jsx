import React, { useState } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
      alert("Login Error: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      {user ? (
        <>
          <h1>Welcome {user.displayName}</h1>
          <img src={user.photoURL} alt="profile" style={{ borderRadius: "50%" }} />
        </>
      ) : (
        <button onClick={handleLogin}>Sign in with Google</button>
      )}
    </div>
  );
}
