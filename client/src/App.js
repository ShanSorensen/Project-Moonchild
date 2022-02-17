import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import Home from './components/Home';
import JournalPage from './components/JournalPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';
import Footer from './components/Footer';
import HeaderLogo from './components/HeaderLogo';


function App() {
  return (
    <>
      <Router>
            <NavList>
              <Link to="/">Home | </Link>
              <Link to="/journalpage">Journal | </Link>
              <Link to="/login">Login | </Link>
              <Link to="/signup">Signup | </Link>
            </NavList>
            <HeaderLogo />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/journalpage" element={<JournalPage/>}/>
              <Route path="*" element={<ErrorPage/>}/> 
            </Routes>
          </Router>
      <Footer/>
    </>
  );
}

export default App;

const NavList = styled.nav`
  border: 1px solid goldenrod;
  background-color: gold;
  float: right; 
  text-align: center;
  display: inline-block;
  opacity: 0.75;
  
`