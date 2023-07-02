import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import Switch from "react-router-dom";

function AppRouter() {
  return (
    <HashRouter>
    <Switch>
      <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Facilities" element={<Facilities />} />
          </Route>
      </Routes>
      </Switch>
    </HashRouter>
  );
}

export default AppRouter;