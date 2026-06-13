import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Loading from './components/Loading';
import SobreMim from './pages/SobreMim';
import Portfolio from './pages/Porfolio'
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); // Simula um carregamento de 3 segundos

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router basename="/caio-portfolio-react">
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <TechStack />
                <Projects />
              </>
            } />
            <Route path="/sobremim" element={<SobreMim />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;