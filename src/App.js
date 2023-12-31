import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import RegisterModal from './components/Modals/RegisterModal';
import RentModal from './components/Modals/RentModal';
import ToasterProvider from './providers/ToasterProvider';
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
      <ToasterProvider />
    <RentModal />
    <Footer/>
</>
  );
}

export default App;