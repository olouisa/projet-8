// import logo from './logo.svg';
import "../styles/App.css";
import React from 'react';
import Home from '../pages/Home';
import FicheLogement from '../pages/FicheLogement';
import APropos from '../pages/APropos';
import NotFound from '../pages/NotFound';
import Header from './Header';
import Footer from  './Footer';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import "../styles/Home.css";
import "../styles/Footer.css";


// import Card from './Card';
// import Banner from './Banner';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/FicheLogements/:id"  element={<FicheLogement/>}/>
        <Route path="/APropos"  element={<APropos/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Routes> 
    <Footer/>
    
    </Router>

 );
}

export default App;
