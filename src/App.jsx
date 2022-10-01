import './App.css';

//External packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from '@chakra-ui/react';

//Router components
import Home from './components/home/Home'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <Router>
      <Box>
        <div className="App">
          <Navbar>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Navbar>
        </div>
      </Box>
    </Router>
  );
}

export default App;
