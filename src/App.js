import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage.js";
import RegisterPage from "./Pages/Register/RegisterPage.js";
import ProfilePage from "./Pages/Profile/ProfilePage.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<LoginPage />} />
          {/* Register Page */}
          <Route path="register" element={<RegisterPage />} />
          {/* Profile Page */}
          <Route path="profile" element={<ProfilePage />} />

          {/* The page for not found url path */}
          <Route path="*" element={<div className="flex h-screen w-full justify-center items-center bg-[#008DDA]">
            <h1 className="text-[#fff] text-2xl font-bold">404 Page Not Found</h1>
          </div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
