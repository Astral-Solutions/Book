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
import OurTeam from "./Components/OurTeam";
import Projects from "./Components/Projects";

// Temporary placeholder component for missing pages
const ComingSoon = ({ pageName }) => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <h1>{pageName}</h1>
    <p>This page is coming soon!</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<WhoWeAre />} />
          <Route path="/calendar" element={<CalendarComponent />} />
          <Route path="/mission-statement" element={<ComingSoon pageName="Mission Statement" />} />
          <Route path="/impact" element={<ComingSoon pageName="Impact" />} />
          <Route path="/function-groups" element={<FunctionGroup />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/literacy-promotion" element={<ComingSoon pageName="Literacy Promotion" />} />
          <Route path="/literacy-development" element={<LiteracyDevelopment />} />
          <Route path="/literacy-hub-functionality" element={<ComingSoon pageName="Literacy Hub Functionality" />} />
          <Route path="/literacy-material-donation" element={<ComingSoon pageName="Literacy Material Donation" />} />
          <Route path="/literacy-material-development" element={<ComingSoon pageName="Literacy Material Development" />} />

          {/* Research Section */}
          <Route path="/research" element={<Research />} />

          {/* Training Section */}
          <Route path="/training" element={<Training />} />

          {/* Projects Section */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/marothodi" element={<ComingSoon pageName="Marothodi Project" />} />
          <Route path="/projects/literacy-facilitator" element={<ComingSoon pageName="Literacy Facilitator Project" />} />

          {/* Get Involved */}
          <Route path="/volunteer" element={<ComingSoon pageName="Volunteer" />} />

          {/* Ways to Give */}
          <Route path="/donate" element={<ComingSoon pageName="Donate" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/membership" element={<ComingSoon pageName="Membership" />} />
          <Route path="/subscription-giving" element={<ComingSoon pageName="Subscription Giving" />} />
          <Route path="/workplace-giving" element={<ComingSoon pageName="Workplace Giving" />} />

          {/* Legacy Routes (redirect or maintain existing functionality) */}
          <Route path="/ways-to-give" element={<ComingSoon pageName="Ways to Give" />} />
          <Route path="/library-functionality" element={<ComingSoon pageName="Literacy Hub Functionality" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;