import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import PageHeader from "./PageHeader";

function AppRouter() {
  return (
    <HashRouter>
      <PageHeader />
      <Routes>
        <Route exact path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Facilities" element={<Facilities />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;