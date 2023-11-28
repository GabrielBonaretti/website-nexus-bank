// Importing React Router components
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importing pages
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ProfilePage from "./Pages/ProfilePage";

// Importing ToastContainer from react-toastify for notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing Zustand store for authentication
import { useAuthStore } from "./stores/authStore/authStore";

// App component definition
function App() {
  // Retrieving the access token from the Zustand store
  const auth = useAuthStore((state) => state.accessToken);

  // App component JSX
  return (
    <>
      {/* BrowserRouter for routing */}
      <BrowserRouter>
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Protected route for the profile page, redirects to home if not authenticated */}
          <Route path="/profile" element={auth ? <ProfilePage /> : <Navigate to="/" />} />
        </Routes>
        {/* ToastContainer for displaying notifications */}
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

// Exporting the App component
export default App;
