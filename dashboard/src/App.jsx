import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./components/Layout";
import DashboardHome from "./pages/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Setting";
import UserDetails from "./pages/UserDetails";
import NotFound from "./pages/NotFound";
import "./App.css";
export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Dynamic user route (root-level as required) */}
        <Route path="/user/:id" element={<UserDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

