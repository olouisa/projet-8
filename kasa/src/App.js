import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import FicheLogement from './FicheLogement';
import APropos from './APropos';
import NotFound from './NotFound';
import Header from './Header';
import Footer from  './Footer';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Header/>
    <Routes>
        <Route path="/"exact element={<Home/>}/>
        <Route path="/FicheLogement" exact element={<FicheLogement/>}/>
        <Route path="/APropos" exact element={<APropos/>}/>
        <Route path="/NotFound" exact element={<NotFound/>}/>
    </Routes>  
    <Footer/>
    
    </Router>

 );
}

export default App;
