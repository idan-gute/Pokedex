import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Favorites from "../components/Favorites/Favorites";
import Layout from "../components/Layout/Layout";

const AppRoutes = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Route>
  </Routes>
);
export default AppRoutes;
