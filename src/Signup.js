import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "./firebase";
import "./login.css";

function SignUpForm() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!userData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(userData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!userData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const submitData = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        alert("Sign-up successful");
      } catch (error) {
        setErrors({ general: error.message });
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in the data correctly");
    }
  };

  return (
    <>
      <div className="form-container sign-up-container">
      </div>
      <form className="form" method="POST" noValidate id="form">
        <div className="social-container">
          <h1>Sign Up</h1>
        
        </div>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={userData.email}
          onChange={postUserData}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={postUserData}
        />
        {errors.password && <p>{errors.password}</p>}
        {errors.general && <p>{errors.general}</p>}
        <br />
        <button type="submit" onClick={submitData} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
      <div className="ft3">
      </div>
    </>
  );
}

export default SignUpForm;
