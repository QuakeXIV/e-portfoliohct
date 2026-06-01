import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import istecLogo from '../assets/istec.png';

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const closeMenu = () => setIsMobileOpen(false);

  return (
    <>
      {/* CSS Embutido para a Navbar */}
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #e2e8f0;
          padding: 20px 40px; /* Navbar mais alta e com mais margem lateral */
          box-shadow: 0 4px 20px -5px rgba(0, 0, 0, 0.05);
        }

        .nav-container {
          max-width: 1400px; /* Mais larga para caber tudo sem esmagar */
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px; /* Força espaço entre o logo e o menu */
        }

        /* ================= BRANDING (LOGO + NOME) ================= */
        .site-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          flex-shrink: 0; /* Impede que o logo encolha */
        }

        .brand-logo {
          height: 48px; /* Logo ligeiramente maior */
          width: auto;
          object-fit: contain;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .brand-name {
          font-family: '"Fira Code", monospace', sans-serif;
          font-weight: 900;
          font-size: 1.25rem;
          color: #0f172a;
          line-height: 1.2;
          white-space: nowrap; /* Impede que o nome fique torto ou mude de linha */
        }

        .brand-tag {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.8rem;
          color: #3b82f6;
          margin: 0;
          font-weight: 700;
          line-height: 1.2;
        }

        /* ================= DESKTOP NAV ================= */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: nowrap;
        }

        .menu-item {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.95rem;
          color: #475569;
          text-decoration: none;
          font-weight: 600;
          padding: 10px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
          background-color: transparent !important; /* Anula backgrounds globais feios */
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
        }

        .menu-item:hover {
          background-color: #f1f5f9 !important;
          color: #3b82f6;
        }

        /* ================= DROPDOWNS ================= */
        .dropdown-trigger {
          position: relative;
          cursor: pointer;
        }

        .dropdown-trigger::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          height: 20px; /* Ponte invisível para o rato não perder o hover */
        }

        .dropdown {
          position: absolute;
          top: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          padding: 8px 0;
          min-width: 260px;
          display: flex;
          flex-direction: column;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
        }

        .dropdown-trigger:hover .dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .dropdown-link {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.9rem;
          color: #475569;
          text-decoration: none;
          padding: 12px 24px;
          transition: all 0.2s ease;
          font-weight: 600;
        }

        .dropdown-link:hover {
          background: #f8fafc;
          color: #3b82f6;
          padding-left: 28px;
          border-left: 3px solid #3b82f6;
        }

        /* ================= HAMBÚRGUER ANIMADO (MOBILE) ================= */
        .mobile-toggle {
          display: none; /* Escondido no Desktop */
          width: 32px;
          height: 24px;
          position: relative;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 100;
        }

        .mobile-toggle span {
          display: block;
          position: absolute;
          height: 3px;
          width: 100%;
          background: #0f172a;
          border-radius: 4px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
        }

        /* Barras normais */
        .mobile-toggle span:nth-child(1) { top: 0px; }
        .mobile-toggle span:nth-child(2) { top: 10px; }
        .mobile-toggle span:nth-child(3) { top: 20px; }

        /* Barras transformadas em X quando menu abre */
        .mobile-toggle.open span:nth-child(1) { top: 10px; transform: rotate(135deg); }
        .mobile-toggle.open span:nth-child(2) { opacity: 0; left: -20px; }
        .mobile-toggle.open span:nth-child(3) { top: 10px; transform: rotate(-135deg); }

        /* ================= MOBILE NAV ================= */
        .mobile-nav {
          display: none;
        }

        /* Responsivo (Telemóveis e Tablets) */
        @media (max-width: 1024px) {
          .site-header { padding: 16px 20px; }
          .desktop-nav { display: none; }
          .mobile-toggle { display: block; }
          
          .mobile-nav {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            padding: 24px;
            box-sizing: border-box;
            gap: 12px;
            max-height: calc(100vh - 80px);
            overflow-y: auto;
          }

          .mobile-nav-item {
            font-family: '"Fira Code", monospace', sans-serif;
            font-size: 1.1rem;
            color: #0f172a;
            text-decoration: none;
            font-weight: 800;
            padding: 12px 0;
            border-bottom: 1px solid #f1f5f9;
          }

          .mobile-nav-subitem {
            font-family: '"Fira Code", monospace', sans-serif;
            font-size: 0.95rem;
            color: #64748b;
            text-decoration: none;
            padding: 10px 0 10px 24px;
            display: block;
            position: relative;
          }

          .mobile-nav-subitem::before {
            content: '↳';
            position: absolute;
            left: 0;
            color: #cbd5e1;
            font-weight: bold;
          }
        }
      `}</style>

      <header className="site-header">
        <div className="nav-container">
          
          {/* Logo e Nome */}
          <Link to="/" className="site-brand" onClick={closeMenu}>
            <img src={istecLogo} alt="ISTEC logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">~/pedro-vale</span>
              <span className="brand-tag">v2.0.0-portfolio</span>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="desktop-nav">
            <Link to="/" className="menu-item">./Início</Link>

            <div className="menu-item dropdown-trigger">
              ./Apresentação ▾
              <div className="dropdown">
                <Link to="/apresentacao/apresentacao" className="dropdown-link">pessoal.ts</Link>
                <Link to="/apresentacao/percurso" className="dropdown-link">percursoacademico.ts</Link>
                <Link to="/apresentacao/competencias" className="dropdown-link">competencias.ts</Link>
                <Link to="/apresentacao/profissional" className="dropdown-link">experienciaprofissional.ts</Link>
              </div>
            </div>

            <div className="menu-item dropdown-trigger">
              ./Evidências ▾
              <div className="dropdown">
                <Link to="/evidencias/artigo" className="dropdown-link">artigo_cientifico.pdf</Link>
                <Link to="/evidencias/cenarios" className="dropdown-link">cenarios_praticos.md</Link>
                <Link to="/evidencias/noticias" className="dropdown-link">noticias.ts</Link>
              </div>
            </div>

            <Link to="/porque-portfolio" className="menu-item">./Objetivo</Link>
            <Link to="/relatorio" className="menu-item">./Relatório</Link>
            <Link to="/contactos" className="menu-item">./Contactos</Link>
          </nav>

          {/* Botão Hambúrguer Animado */}
          <button 
            className={`mobile-toggle ${isMobileOpen ? 'open' : ''}`} 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu Mobile"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Navegação Mobile */}
        {isMobileOpen && (
          <nav className="mobile-nav">
            <Link to="/" className="mobile-nav-item" onClick={closeMenu}>./Início</Link>

            <span className="mobile-nav-item" style={{ color: '#3b82f6', border: 'none', paddingBottom: 0 }}>./Apresentação</span>
            <Link to="/apresentacao/apresentacao" className="mobile-nav-subitem" onClick={closeMenu}>pessoal.ts</Link>
            <Link to="/apresentacao/percurso" className="mobile-nav-subitem" onClick={closeMenu}>percurso.ts</Link>
            <Link to="/apresentacao/competencias" className="mobile-nav-subitem" onClick={closeMenu}>competencias.ts</Link>
            <Link to="/apresentacao/profissional" className="mobile-nav-subitem" onClick={closeMenu}>profissional.ts</Link>

            <span className="mobile-nav-item" style={{ color: '#3b82f6', border: 'none', paddingBottom: 0, marginTop: '12px' }}>./Evidências</span>
            <Link to="/evidencias/artigo" className="mobile-nav-subitem" onClick={closeMenu}>artigo_cientifico.pdf</Link>
            <Link to="/evidencias/cenarios" className="mobile-nav-subitem" onClick={closeMenu}>cenarios_praticos.md</Link>
            <Link to="/evidencias/noticias" className="mobile-nav-subitem" onClick={closeMenu}>noticias.ts</Link>

            <Link to="/porque-portfolio" className="mobile-nav-item" onClick={closeMenu} style={{ marginTop: '12px' }}>./Objetivo</Link>
            <Link to="/relatorio" className="mobile-nav-item" onClick={closeMenu}>./Relatório</Link>
            <Link to="/contactos" className="mobile-nav-item" onClick={closeMenu}>./Contactos</Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;