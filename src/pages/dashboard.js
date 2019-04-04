import React from "react";
import { axiosInstance } from "../services";

export default function Dashboard({ history }) {
  return (
    <div>
      <button
        onClick={() => {
          axiosInstance
            .post(`/oauth/revoke`)
            .then(res => {
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              history.push("/login");
            })
            .catch(err => {
              console.error(err);
            });
        }}
      >
        Log out
      </button>
    </div>
  );
}
