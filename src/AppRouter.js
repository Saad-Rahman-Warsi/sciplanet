import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Facilities" element={<Facilities />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;