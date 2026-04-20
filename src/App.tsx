import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import CourseDetail from "@/pages/CourseDetail";
import CourseContent from "@/pages/CourseContent";
import LearningCenter from "@/pages/LearningCenter";
import Practice from "@/pages/Practice";
import PracticeEditor from "@/pages/PracticeEditor";
import PracticeTools from "@/pages/PracticeTools";
import Community from "@/pages/Community";
import Profile from "@/pages/Profile";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/courses/:id/contents/:contentId" element={<CourseContent />} />
          <Route path="/learning-center" element={<LearningCenter />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/editor" element={<PracticeEditor />} />
          <Route path="/practice/tools" element={<PracticeTools />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
