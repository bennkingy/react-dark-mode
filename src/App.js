import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RegisterModal from './components/Modals/RegisterModal';
import Contact from './screens/Contact';
import Home from './screens/Home.tsx';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <RegisterModal />
    <Footer/>
</>
  );
}

export default App;