// Import the useUserAuth hook
import React from "react";
import { useUserAuth } from "./_utils/auth-context";

// Use the useUserAuth hook to get the user object and the login and logout functions
const MyComponent = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/shopping-list">Go to Shopping List</Link>
        </>
      ) : (
        <button onClick={handleLogin}>Login with GitHub</button>
      )}
    </div>
  );
};

export default MyComponent;
