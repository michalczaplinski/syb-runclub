import React, { useState } from "react";
import { axios, auth } from "../services";

// TODO: put Input component in a new file
const Input = ({ ...props }) => {
  return (
    <div>
      <input {...props} />
    </div>
  );
};

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        axios
          .post("/login", { email, password })
          .then(res => {
            // const { sessionId } = res.data;
            // TODO: set the header on axios instance for every subsequent request
            // auth.login();
            // history.push("/dashboard");
          })
          .catch(err => {
            console.error(err);
          });
      }}
    >
      <h2>Log in</h2>
      <Input
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit"> SUBMIT </button>
    </form>
  );
}
