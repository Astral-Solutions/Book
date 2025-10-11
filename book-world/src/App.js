import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core Components
import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./Components/Layout";

// Pages
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import FunctionGroup from "./Components/FunctionGroup";
import GetInvolvedPage from "./Components/GetInvolved";
import Research from "./Components/Research";
import Training from "./Components/Training";
import WaysToGive from "./Components/WaysToGive";
import WhoWeAre from "./Components/WhoWeAre";
import CalendarComponent from "./Components/Calendar";
import LiteracyDevelopment from "./Components/LiteracyDevelopment";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/function-groups" element={<FunctionGroup />} />
          <Route path="/calendar" element={<CalendarComponent />} />
          <Route path="/research" element={<Research />} />
          <Route path="/training" element={<Training />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/ways-to-give" element={<WaysToGive />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/literacy-development" element={<LiteracyDevelopment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
