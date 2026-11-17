import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

import Home from './pages/Home';
import Courses from './pages/Courses';
import IndustrialDesign from './pages/IndustrialDesign';
import AutomotiveDesign from './pages/AutomotiveDesign';
import CourseDetails from './pages/CourseDetails';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/courses.css';
import './styles/components.css';
import './styles/responsive.css';
import './styles/course-detail-enhanced.css';
import './styles/placements.css';
import './styles/services.css';
import './styles/accreditations.css';
import './styles/leadership.css';
import './styles/employers.css';
import './styles/chooser.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/industrial-design" element={<IndustrialDesign />} />
        <Route path="/automotive-design" element={<AutomotiveDesign />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
