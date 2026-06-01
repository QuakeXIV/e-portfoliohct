import React from 'react';
import { Link } from 'react-router-dom';
import istecLogo from '../assets/istec.png';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer footer-creative">
      <div className="footer-topbar" aria-hidden="true" />

      <div className="footer-grid">
        <div className="footer-col brand-col">
          <div id="logoistec">
            <img src={istecLogo} alt="ISTEC Porto" className="footer-logo" />
           </div>
            <h3 className="footer-brand-title">ISTEC Porto</h3> 
            <p className="footer-info"><strong>Licenciatura:</strong> Engenharia Informática</p>
          <p className="footer-info"><strong>Unidade Curricular:</strong> História da Ciência e das Técnicas</p>
          <p className="footer-info"><strong>Ano Letivo:</strong> 2025 / 2026</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/pedro-vale-842004211/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">in</a>
            <a href="https://github.com/QuakeXIV" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">gh</a>
          </div>
        </div>

        <div className="footer-col nav-col">
          <h4 className="footer-title">Navegação</h4>
          <ul className="footer-list">
            <li><Link to="/" className="footer-link">Início</Link></li>
            <li><Link to="/relatorio" className="footer-link">Relatório</Link></li>
            <li><Link to="/contactos" className="footer-link">Contactos</Link></li>
          </ul>
        </div>

        <div className="footer-col submenu-col">
          <h4 className="footer-title">Apresentação</h4>
          <ul className="footer-list">
            <li><Link to="/apresentacao" className="footer-link">Pessoal</Link></li>
            <li><Link to="/apresentacao" className="footer-link">Percurso Académico</Link></li>
          </ul>
        </div>

        <div className="footer-col submenu-col">
          <h4 className="footer-title">Evidências</h4>
          <ul className="footer-list">
            <li><Link to="/evidencias/artigo" className="footer-link">Artigo Científico</Link></li>
            <li><Link to="/evidencias/cenarios" className="footer-link">Cenários Práticos</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>© {year} Pedro Vale — E-Portfolio Académico</span>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
