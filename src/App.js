import './App.css';

//External packages
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

//Router components
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'


function App() {
  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <header className="App-header">
            
          </header>
          <div>
            <Routes>
              <Route path="/" element={<About/>} />
              <Route path="/translator" element={<Work />} />
              <Route path="/profile" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
