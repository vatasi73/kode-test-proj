import React from "react";
import { Routes, Route } from "react-router-dom";

import Wrapper from "./component/Wrapper";
import HomePage from "./pages/HomePage";

import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/id/:id" element={<UserPage />} />
      </Routes>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
