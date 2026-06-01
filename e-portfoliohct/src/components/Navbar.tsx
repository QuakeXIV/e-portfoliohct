import React from 'react';
import { Link } from 'react-router-dom';
import istecLogo from '../assets/istec.png';

const Navbar: React.FC = () => {
  return (
    <header className="site-header">
      <div className="site-brand">
        <img src={istecLogo} alt="ISTEC logo" className="brand-logo" />
        <div>
          <span className="brand-name">Pedro Vale</span>
          <p className="brand-tag">E-Portfólio</p>
        </div>
      </div>

      <nav className="nav-links">
        <Link to="/" className="menu-item">Início</Link>

        <div className="menu-item dropdown-trigger">
          Apresentação ▾
          <div className="dropdown">
            <Link to="/apresentacao/apresentacao" className="dropdown-link">Pessoal</Link>
            <Link to="/apresentacao/percurso" className="dropdown-link">Percurso Académico</Link>
            <Link to="/apresentacao/competencias" className="dropdown-link">Competências</Link>
            <Link to="/apresentacao/profissional" className="dropdown-link">Experiência Profissional</Link>
          </div>
        </div>

        <div className="menu-item dropdown-trigger">
          Evidências ▾
          <div className="dropdown">
            <Link to="/evidencias/artigo" className="dropdown-link">Artigo Científico</Link>
            <Link to="/evidencias/cenarios" className="dropdown-link">Cenários Práticos</Link>
          </div>
        </div>


        <Link to="/porque-portfolio" className="menu-item">Porquê um Portfólio?</Link>
        <Link to="/relatorio" className="menu-item">Relatório</Link>
        <Link to="/contactos" className="menu-item">Contactos</Link>
      </nav>
    </header>
  );
};

export default Navbar;