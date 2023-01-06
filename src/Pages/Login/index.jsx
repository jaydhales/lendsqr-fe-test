import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import logo from "../../assets/logo.svg";
import loginPoster from "../../assets/login-poster.png";

import "./Login.scss";

const Login = () => {
  const { handleLogin } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isSubmitting) {
      if (formData.email && formData.password) {
        handleLogin(formData);
        setFormData({ email: "", password: "" });
      } else {
        alert("Please fill all the fields");
      }
    }

    setIsSubmitting(false);
  }, [isSubmitting]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
      <div className="Login-content">
        <img src={loginPoster} alt="" />
        <form className="Login-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-head">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </div>
          <div className="form-body">
            <label htmlFor="email" className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                // required
              />
            </label>
            <label htmlFor="password" className="form-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                // required
              />

              <a
                className="form-action"
                href="#"
                onClick={(e) => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </a>
            </label>

            <a href="#" className="form-action">
              FORGOT PASSWORD?
            </a>

            <input type="submit" className="btn btn-green" value="LOG IN" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
