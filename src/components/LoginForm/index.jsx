import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useHistory } from "react-router";
import "./styles.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = () => {
    console.log("here");
    const allUsers = JSON.parse(localStorage.getItem("usersData"));
    const admins = allUsers["admins"];
    const users = allUsers["users"];

    admins.find((item) => item.email === email && item.password === password) &&
      history.push("/adminPage");

    users.find((item) => item.email === email && item.password == password) &&
      history.push("/usersPage");
  };
  return (
    <div className="loginForm-wrapper">
      <Form onSubmit={() => handleFormSubmit()}>
        <Form.Field>
          <label>Email</label>
          <Form.Input
            onChange={(e) => handleEmailChange(e)}
            placeholder="Email"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <Form.Input
            onChange={(e) => handlePasswordChange(e)}
            placeholder="Password"
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
