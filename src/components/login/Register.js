import React, { Component } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import Nav from "../nav/Nav";
import Input from "../UI/input/Input";
class Register extends Component {
  state = {
    // email: '',
    // password: '',
    formConfig: [
      {
        id: "email",
        type: "text",
        placeholder: "Email",
        value: "",
        invalid: true,
        changed: false
      },
      {
        id: "password",
        type: "password",
        placeholder: "Password",
        value: "",
        invalid: true,
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
      // return true;
      case "password":
        return value.length > 0;
      default:
    }
  };

  handleRegister = () => {
    axios
      .post("http://172.22.13.38:1323/users", {
        email: this.state.formConfig[0].value,
        password: this.state.formConfig[1].value
      })
      .then(response => {
        console.log("register response = ", response);
      });
  };
  render() {
    const { formConfig } = this.state;
    const isFormInvalid = !!formConfig.some(item => item.invalid);
    return (
      <div>
        <Nav />
        <div className={styles.card}>
          <h3>Register Form</h3>

          <form onSubmit={this.handleRegister}>
            {formConfig.map(item => (
              <Input
                key={item.id}
                {...item}
                onChange={this.inputChangeHandler}
              />
            ))}
            <button disabled={isFormInvalid}>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
