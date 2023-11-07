// react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />f
          <Route path="/register" element={<Register />} />f
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
