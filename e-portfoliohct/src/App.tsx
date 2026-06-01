import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Importação das páginas (vais ter de criar os ficheiros correspondentes)
import Inicio from './pages/Inicio';
import Apresentacao from './pages/Apresentacao/Apresentacao';
import Artigo from './pages/Evidencias/Artigo';
import Cenarios from './pages/Evidencias/Cenarios';
import Relatorio from './pages/Relatorio';
import Contactos from './pages/Contactos';
import Percurso from './pages/Apresentacao/Percurso';
import Competencias from './pages/Apresentacao/Competencias';
import Profissional from './pages/Apresentacao/Profissional';
import ObjetivoPortfolio from './pages/PorquePortfolio';

const App: React.FC = () => {
  // Single dark theme only — no runtime theme toggling.

  return (
    <Router>
      <div className="app-shell">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/apresentacao/apresentacao" element={<Apresentacao />} />
            <Route path="/apresentacao/percurso" element={<Percurso />} />
            <Route path="/evidencias/artigo" element={<Artigo />} />
            <Route path="/evidencias/cenarios" element={<Cenarios />} />
            <Route path="/relatorio" element={<Relatorio />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path='/apresentacao/competencias' element= {<Competencias />} />
            <Route path='/apresentacao/profissional' element= {<Profissional />} />
            <Route path='/porque-portfolio' element= {<ObjetivoPortfolio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;