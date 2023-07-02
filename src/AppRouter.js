import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import Layout from "./Layout";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Facilities" element={<Facilities />} />
          </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;