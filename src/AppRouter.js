import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Facilities from "./Facilities";
import PageHeader from "./PageHeader";
import ContactUs from "./ContactUs";

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<PageHeader />}>
          <Route index element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/Facilities" element={<Facilities />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;