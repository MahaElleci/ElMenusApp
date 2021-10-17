import React, { useState } from "react";
import { useHistory } from "react-router";
import { Message, Container } from "semantic-ui-react";
import LoginForm from "../../components/LoginForm"; 

import "./styles.scss";
const LoginPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    formError: false,
    invalidCredentials: false,
  });

  const history = useHistory();
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleFormSubmit = () => {
    const allUsers = JSON.parse(localStorage.getItem("usersData"));
    const admins = allUsers["admins"];
    const users = allUsers["users"];
    let isUser =
      users.find(
        (item) => item.email === state.email && item.password === state.password
      ) != undefined;
    let isAdmin =
      admins.find(
        (item) => item.email === state.email && item.password === state.password
      ) != undefined;
    if (state.email === "" || state.password === "") {
      setState({ ...state, formError: true });
      return;
    }
    if (!isUser && !isAdmin) {
      setState({
        ...state,
        invalidCredentials: true,
      });
      return;
    }

    history.push({
      pathname: "/usersPage",
      state: { isAdmin: isAdmin },
    });
  };
  return (
    <div className="login-page"> 
    <Container>
      <LoginForm
        handleFormSubmit={handleFormSubmit}
        handleChange={handleChange}
        error={state.formError}
      />
      {state.invalidCredentials && (
        <Message negative>This user does not exist!</Message>
      )} 
      </Container>
    </div>
  );
};

export default LoginPage;
