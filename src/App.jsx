import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Korzinka from "./pages/Korzinka";
import Like from "./pages/Like";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/korzinka" element={<Korzinka />} />
          <Route path="/like" element={<Like />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
