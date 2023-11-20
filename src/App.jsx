// react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProfilePage from "./Pages/ProfilePage";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// zustend
import { useAuthStore } from "./stores/authStore/authStore";

function App() {
  const auth = useAuthStore((state) => state.accessToken);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />f
          <Route path="/register" element={<Register />} />f
          <Route path="/login" element={<Login />} />f
          <Route path="/profile" element={auth ? <ProfilePage /> : <Navigate to="/" />} />f
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </>
  );
}

export default App;
