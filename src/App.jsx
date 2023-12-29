import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import Place from "./pages/Place";
import PlaceDetails from "./pages/PlaceDetails";
import DestinationRoute from "./pages/DestinationRoute";
import DestinationDetails from "./pages/DestinationDetails";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlacesRoute />} />
            <Route exact path="/" component={<Place />} />
            <Route exact path="/places/:id" element={<PlaceDetails />} />
            <Route path="destination" element={<DestinationRoute />} />
            <Route path="destination/:id" element={<DestinationDetails />}/>
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />}/>
            <Route path="terms-and-conditions" element={<TermsAndConditions />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};


export default App;
