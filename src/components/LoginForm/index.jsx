import { Button, Form } from "semantic-ui-react";

import "./styles.scss";

const LoginForm = ({ handleFormSubmit, handleChange, error }) => {
  return (
    <div className="loginForm-wrapper">
      <Form error={error} onSubmit={() => handleFormSubmit()}>
        <Form.Field required>
          <label>Email</label>
          <Form.Input
            onChange={(e) => handleChange(e)}
            placeholder="Email"
            name="email"
            error={error}
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Form.Input
            onChange={(e) => handleChange(e)}
            placeholder="Password"
            name="password"
            type="password"
            error={error}
          />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
