import React, { Component } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { Redirect } from "react-router-dom";
import Nav from "../nav/Nav";
import Input from "../UI/input/Input";

class Login extends Component {
  state = {
    // email: 'm1@test.com',
    // password: 'mihai1',
    formConfig: [
      {
        id: "email",
        type: "text",
        placeholder: "Email",
        value: "m1@test.com",
        invalid: false,
        changed: false
      },
      {
        id: "password",
        type: "password",
        placeholder: "Password",
        value: "mihai1",
        invalid: false,
        changed: false
      }
    ]
  };

  inputChangeHandler = (id, value) => {
    const updatedFormConfig = [...this.state.formConfig];
    let updatedFormItem = updatedFormConfig.find(item => item.id === id);
    const itemIndex = updatedFormConfig.indexOf(updatedFormItem);

    updatedFormItem = {
      ...updatedFormConfig.find(item => item.id === id),
      value,
      changed: true,
      invalid: !this.isFormFieldValid(updatedFormItem.id, value)
    };

    updatedFormConfig[itemIndex] = updatedFormItem;

    this.setState({ formConfig: updatedFormConfig });
  };

  isFormFieldValid = (fieldId, value) => {
    switch (fieldId) {
      case "email":
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
      case "password":
        return value.length > 0;
      default:
    }
  };

  handleLogin = () => {
    console.log("handleLogin");
    axios
      .post("http://172.22.13.38:1323/users/login", {
        email: this.state.formConfig[0].value,
        password: this.state.formConfig[1].value
      })
      .then(response => {
        console.log("handleLogin response");
        localStorage.setItem("userID", response.data.id);
        this.props.history.push("/recipes");
      })
      .catch(error => {
        console.log(error.response.data.Message);
      });
  };
  render() {
    const { formConfig } = this.state;
    const isFormInvalid = !!formConfig.some(item => item.invalid);
    const isLogged = !!localStorage.getItem("userID");
    return !isLogged ? (
      <div>
        <Nav />
        <div className={styles.card}>
          <h3>Login</h3>

          <form onSubmit={this.handleLogin}>
            {formConfig.map(item => (
              <Input
                key={item.id}
                {...item}
                onChange={this.inputChangeHandler}
              />
            ))}
            <button disabled={isFormInvalid}>Login</button>
          </form>
        </div>
      </div>
    ) : (
      <Redirect to="/recipes" />
    );
  }
}

export default Login;
