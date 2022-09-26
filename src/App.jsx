import './App.css';

//External packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from '@chakra-ui/react';

//Router components
import Home from './components/home/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <Box>
        <div className="App">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/work" element={<Work />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </Box>
    </Router>
  );
}

export default App;
