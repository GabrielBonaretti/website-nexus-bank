// react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />f
          <Route path="/register" element={<Register />} />f
          <Route path="/login" element={<Login />} />f
          <Route path="/profile" element={<ProfilePage />} />f
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
