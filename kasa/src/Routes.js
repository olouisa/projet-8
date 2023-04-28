import React from 'react';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import APropos from './pages/APropos';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function RoutesApp() {
    return (

        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/FicheLogements/:id" element={<FicheLogement />} />
                <Route path="/APropos" element={<APropos />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />

        </Router>

    )
}

export default RoutesApp
