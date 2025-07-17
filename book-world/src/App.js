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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/mission-statement" element={<MissionStatement />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/function-groups" element={<FunctionGroupsPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
<<<<<<< HEAD
          <Route path="/reading-promotion" element={<ReadingPromotion/>} />
          <Route path="/literacy-development" element={<LiteracyDevelopment/>} />
          <Route path="/library-functionality" element={<LibraryFunctionality/>} />
          <Route path="/book-donation" element={<BookDonation/>} />
          <Route path="/book-development" element={<BookDevelopment/>} />
          <Route path="/volunteer" element={<VolunteerPage/>} />
          <Route path="/donate" element={<DonationsPage/>} />
=======
          <Route path="/literacy-promotion" element={<LiteracyPromotion />} />
          <Route path="/literacy-development" element={<LiteracyDevelopment />} />
          <Route path="/literacy-hub-functionality" element={<LiteracyHubFunctionality />} />
          <Route path="/literacy-material-donation" element={<LiteracyMaterialDonation />} />
          <Route path="/literacy-material-development" element={<LiteracyMaterialDevelopment />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/donate" element={<DonationsPage />} />
>>>>>>> 6a8f1c1a284cbdf776a73656baa94887c1a83d13
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
