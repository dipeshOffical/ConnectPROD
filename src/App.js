import "./App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ChairmanMessagePage from "./pages/ChairmanMessagePage";
import MigrationPage from "./pages/MigrationPage";
import AssocCollegePage from "./pages/AssocCollegePage";
import StudentServicePage from "./pages/StudentServicePage";
import TestimonialPage from "./pages/TestimonialPage";
import ContactPage from "./pages/ContactPage";
import IeltsTrainingPage from "./pages/IeltsTrainingPage";
import StudyAustraliaPage from "./pages/StudyAustraliaPage";
import NewsAndEventsPage from "./pages/NewsAndEventsPage";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import BranchContact from "./components/BranchContact";
import AboutTraining from "./components/AboutTraining";
import BranchContactNepal from "./components/BranchContactNepal";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/message" element={<ChairmanMessagePage />}></Route>
          <Route path="/migration" element={<MigrationPage />}></Route>
          <Route path="/associations" element={<AssocCollegePage />}></Route>
          <Route path="/testimonial" element={<TestimonialPage />}></Route>
          <Route path="/contact" element={<ContactPage />}>
            <Route path="australia" element={<BranchContact />} />
            <Route path="nepal" element={<BranchContactNepal />} />
          </Route>
          <Route path="/service" element={<StudentServicePage />}></Route>
          <Route path="/ielts" element={<IeltsTrainingPage />}>
            <Route path="all" element={<AboutTraining />} />
            <Route path="visa" element={<AboutTraining />} />
            <Route path="support" element={<AboutTraining />} />
            <Route path="insurance" element={<AboutTraining />} />
          </Route>
          <Route path="/study" element={<StudyAustraliaPage />}></Route>
          <Route path="/news-events" element={<NewsAndEventsPage />}></Route>
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
