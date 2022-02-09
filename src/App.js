import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";
import Todo from "./routes/Todo";
import Coin from "./routes/Coin";

function App() {
  return (
    <HashRouter>
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/coin" element={<Coin />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
