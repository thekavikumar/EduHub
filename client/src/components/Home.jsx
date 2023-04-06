import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Home() {
  const { user, logout } = useAuth0();
  return (
    <div>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Home;
