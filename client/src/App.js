// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseListingPage from "./pages/CourseListPage";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import Navbar from "./pages/navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CourseListingPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
