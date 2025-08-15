import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Calendar from "./Components/Calendar";
import MissionStatement from "./Components/MissionStatement";
import Contact from "./Components/Contact";
import FunctionGroupsPage from "./Components/FunctionGroup";
import GetInvolvedPage from "./Components/GetInvolved";
import ImpactPage from "./Components/Impact";
import LiteracyPromotion from "./Components/LiteracyPromotion";
import LiteracyDevelopment from "./Components/LiteracyDevelopment";
import LiteracyMaterialDevelopment from "./Components/LiteracyMaterialDevelopment";
import LiteracyMaterialDonation from "./Components/LiteracyMaterialDonation";
import LiteracyHubFunctionality from "./Components/LiteracyHubFunctionality";
import VolunteerPage from "./Components/Volunteer";
import DonationsPage from "./Components/Donate";

// Existing components that are already created
import OurTeam from "./Components/OurTeam";
import Projects from "./Components/Projects";

// Components that need to be created (commented out until files exist)
// import OurPartners from "./Components/OurPartners";
// import OurWork from "./Components/OurWork";
// import MarothodiProject from "./Components/MarothodiProject";
// import LiteracyFacilitatorProject from "./Components/LiteracyFacilitatorProject";
// import Training from "./Components/Training";
// import Research from "./Components/Research";
// import Membership from "./Components/Membership";
// import SubscriptionGiving from "./Components/SubscriptionGiving";
// import WorkplaceGiving from "./Components/WorkplaceGiving";

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
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/mission-statement" element={<MissionStatement />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/contact" element={<Contact />} />

          {/* Who We Are Section */}
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/our-partners" element={<ComingSoon pageName="Our Partners" />} />
          <Route path="/our-work" element={<ComingSoon pageName="Our Work" />} />

          {/* Function Groups */}
          <Route path="/function-groups" element={<FunctionGroupsPage />} />
          <Route path="/literacy-promotion" element={<LiteracyPromotion />} />
          <Route path="/literacy-development" element={<LiteracyDevelopment />} />
          <Route path="/literacy-hub-functionality" element={<LiteracyHubFunctionality />} />
          <Route path="/literacy-material-donation" element={<LiteracyMaterialDonation />} />
          <Route path="/literacy-material-development" element={<LiteracyMaterialDevelopment />} />

          {/* Research Section */}
          <Route path="/research" element={<ComingSoon pageName="Research" />} />

          {/* Training Section */}
          <Route path="/training" element={<ComingSoon pageName="Training" />} />

          {/* Projects Section */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/marothodi" element={<ComingSoon pageName="Marothodi Project" />} />
          <Route path="/projects/literacy-facilitator" element={<ComingSoon pageName="Literacy Facilitator Project" />} />

          {/* Get Involved */}
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />

          {/* Ways to Give */}
          <Route path="/donate" element={<DonationsPage />} />
          <Route path="/membership" element={<ComingSoon pageName="Membership" />} />
          <Route path="/subscription-giving" element={<ComingSoon pageName="Subscription Giving" />} />
          <Route path="/workplace-giving" element={<ComingSoon pageName="Workplace Giving" />} />

          {/* Legacy Routes (redirect or maintain existing functionality) */}
          <Route path="/ways-to-give" element={<DonationsPage />} />
          <Route path="/library-functionality" element={<LiteracyHubFunctionality />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;