import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username here",
      errorMessage:
        "Username should be at least 3-16 characters and it souldn't include any special characters",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email here",
      errorMessage: "It should be a valid email",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday here ...",
      label: "Birthday",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Your password here",
      errorMessage:
        "Password should be at least 8-20 characters and it should include at least 1 letter, 1 number, and 1 special character",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },

    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your password here",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
