import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import AdmisionPages from "./pages/AdmisionPages";
import './styles/pages.css'
import ChatbotComponent from "./components/Chatbot/Chatboatcomponent";

const App = () => {
  return(
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/admision" element={<AdmisionPages/>}/>
        
      </Routes>
      <ChatbotComponent/>
     </Router>
    </div>
  )
}

export default App;