import React from 'react';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useLogement } from './Hooks';
import { useOneLogement } from './Hooks';
import { useEffect } from 'react';


function RoutesApp() {
  

    return (

        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
        
                <Route path="/FicheLogements/:id" element={ <FicheLogement />}/> 
                <Route path="/APropos" element={<APropos />} />
                <Route path="*"  element={<NotFound />} /> 
                
            </Routes>
            <Footer />

        </Router>

    )
}

export default RoutesApp
