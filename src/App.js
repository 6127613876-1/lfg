import React from "react";
import { Route, Routes } from "react-router-dom";
import Movie from "./routes/Movie";
import SignInForm from "./Signup";
import ContactPage from "./components/ContactPage";
import Login from "./Login";
import Profile from "./components/Profile";
import "./App.css"; // Include CSS for general styles
import Storage from "./components/Storage";
import MovieForm from "./components/MovieForm";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignInForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/store" element={<Storage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/movieform" element={<MovieForm />} />
    </Routes>
  );
};

export default App;
