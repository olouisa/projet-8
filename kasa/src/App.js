// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import FicheLogement from './FicheLogement';
import APropos from './APropos';
import NotFound from './NotFound';
import Header from './Header';
import Footer from  './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import "./Home.css";
import "./Footer.css";


// import Card from './Card';
// import Banner from './Banner';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/FicheLogement"  element={<FicheLogement/>}/>
        <Route path="/APropos"  element={<APropos/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes> 
    <Footer/>
    
    </Router>

 );
}

export default App;
