import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import {Outlet} from "react-router-dom";

function AppRouter() {
  return (
    <div>
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Facilities" element={<Facilities />} />
          </Route>
      </Routes>
    </HashRouter>
    <Outlet />
    </div>
  );
}

export default AppRouter;