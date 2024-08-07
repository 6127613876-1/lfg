import React from "react";
import { Route, Routes } from "react-router-dom";
import Movie from "./routes/Movie";
import SignInForm from "./Signup";
import ContactPage from "./components/ContactPage";
import Login from "./Login";
import Profile from "./components/Profile";
import "./App.css"; // Include CSS for general styles

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignInForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default App;
