import React from "react";
import { auth } from "../services";

export default function Dashboard({ history }) {
  return (
    <div>
      <button
        onClick={() => {
          auth.logout();
          history.push("/login");
        }}
      >
        Log out
      </button>
    </div>
  );
}
