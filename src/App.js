import './App.css';
import { NavBar } from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact_page';
import Home from './components/home';
import ProjectsC from './components/Projects_content'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/project' element={<ProjectsC/>}></Route>
      </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
