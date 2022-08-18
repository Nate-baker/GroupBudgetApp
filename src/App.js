import "./styles.css";
import { Header } from "./Components/Header";
import React from "react";
import { useSelector } from "react-redux";
import { Login } from "./Components/Login";

export default function App() {
  const user = useSelector((state) => state.user.value);

  return (
    <div className="App">
      {!user && <Login />}
      {user && <Header />}
      <div className="content"></div>
    </div>
  );
}
