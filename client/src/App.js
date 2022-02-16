import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { useState } from 'react';
import Home from './components/Home';
import JournalPage from './components/JournalPage';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import PrivateRoute from './components/PrivateRoute';
import styled from 'styled-components';


function App() {
  return (
  <Router>
        <nav>
          <Link to="/">Home | </Link>
          <Link to="/journalpage">Journal | </Link>
          <Link to="/login">Login | </Link>
          <Link to="/signup">Signup | </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/journalpage" element={<JournalPage/>}/>
          <Route path="*" element={<ErrorPage/>}/> 
        </Routes>
      </Router>
  );
}

export default App;

const Nav = styled.div`

`