import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";


function AppRouter() {
  return (
    <div>
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home />}>
          
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Facilities" element={<Facilities />} />
          </Route>
      </Routes>
    </HashRouter>
    </div>
  );
}

export default AppRouter;