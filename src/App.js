import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ContextPage } from "./pages/ContextPage";
import { HocPage } from "./pages/HocPage";
import { Home } from "./pages/Home";
import { LifeCyclePage } from "./pages/LifeCyclePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lifecycle" element={<LifeCyclePage />} />
          <Route path="hoc" element={<HocPage />} />
          <Route path="context" element={<ContextPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
