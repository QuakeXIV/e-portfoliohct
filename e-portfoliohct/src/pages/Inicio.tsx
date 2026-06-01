import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/FotoTipoPasse_PedroVale.jpg';

const Inicio: React.FC = () => {
  return (
    <div className="inicio-root">
      
      {/* CSS Embutido para o Layout Tech / Terminal */}
      <style>{`
        .inicio-root {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        /* ================= HERO SECTION ================= */
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 40px; 
          padding-bottom: 40px; 
          border-bottom: 1px dashed var(--border, #cbd5e1);
          height: auto !important; /* Força a anular regras antigas */
          min-height: 0 !important;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 650px;
        }

        .status-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .tech-badge {
          display: inline-block;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.8rem;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .system-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.8rem;
          color: #10b981;
          font-weight: 600;
          background: rgba(16, 185, 129, 0.1);
          padding: 6px 12px;
          border-radius: 20px;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .hero-name {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 20px 0;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.1;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .prompt-symbol-blue {
          color: #3b82f6;
          margin-right: 12px;
        }

        .hero-bio {
          font-size: 1.15rem;
          color: var(--text-p, #475569);
          line-height: 1.8;
          margin: 0 0 32px 0;
        }

        .hero-actions {
          display: flex;
          flex-direction: row;
          gap: 16px;
          flex-wrap: wrap;
          width: 100%;
        }

        .btn-tech-primary, .btn-tech-secondary {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
        }

        .btn-tech-primary {
          background: #3b82f6;
          color: #ffffff;
          border: 2px solid #3b82f6;
          box-shadow: 0 4px 14px 0 rgba(59, 130, 246, 0.39);
        }

        .btn-tech-primary:hover {
          background: #2563eb;
          border-color: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.23);
        }

        .btn-tech-secondary {
          background: transparent;
          color: var(--text-h, #0f172a);
          border: 2px solid #cbd5e1;
        }

        .btn-tech-secondary:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: translateY(-2px);
        }

        /* Foto de Perfil */
        .hero-image-wrapper {
          position: relative;
          width: 320px;
          height: 320px;
          flex-shrink: 0;
        }

        .hero-image-wrapper::before {
          content: '';
          position: absolute;
          inset: -15px;
          border: 2px dashed #93c5fd;
          border-radius: 50%;
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--surface, #ffffff);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          position: relative;
          z-index: 2;
        }

        /* ================= FRAMEWORK SECTION (Terminal) ================= */
        .tech-section-title {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.8rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 8px 0;
          font-weight: 800;
        }

        .tech-section-subtitle {
          color: #64748b;
          font-size: 1.1rem;
          margin: 0 0 24px 0; 
        }

        .terminal-block {
          background: #0f172a;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 50px; 
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .terminal-header {
          background: #1e293b;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid #334155;
        }

        .mac-controls {
          display: flex;
          gap: 8px;
        }

        .mac-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .terminal-title {
          font-family: '"Fira Code", monospace', sans-serif;
          color: #94a3b8;
          font-size: 0.85rem;
          margin-left: 16px;
        }

        .terminal-body {
          padding: 32px;
          color: #f8fafc;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .cmd-line {
          color: #38bdf8;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .terminal-text {
          color: #cbd5e1;
          margin: 0 0 16px 0;
          text-align: justify;
        }
        
        .terminal-text:last-child {
          margin-bottom: 0;
        }

        .keyword-hl { color: #f472b6; }
        .string-hl { color: #a3e635; }

        /* ================= JOURNEY SECTION ================= */
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 24px;
        }

        .journey-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 16px;
          padding: 40px 32px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          height: 100%;
          box-sizing: border-box;
          background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: -10px -10px;
        }

        .journey-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,1) 100%);
          z-index: 0;
        }

        /* Marca de Água */
        .journey-card::after {
          content: attr(data-step);
          position: absolute;
          top: 10px;
          right: 20px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 6rem;
          font-weight: 900;
          color: #f1f5f9;
          opacity: 0.6;
          z-index: 0;
          pointer-events: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .journey-card:hover {
          transform: translateY(-8px);
          border-color: #93c5fd;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .journey-card:hover::after {
          color: #e0e7ff;
          transform: scale(1.1);
        }

        .card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-module {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.8rem;
          color: #3b82f6;
          font-weight: 700;
          margin-bottom: 12px;
          display: block;
        }

        .card-title {
          font-size: 1.4rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 16px 0;
          font-weight: 800;
        }

        .card-desc {
          color: var(--text-p, #475569);
          line-height: 1.6;
          margin: 0 0 24px 0;
          font-size: 0.95rem;
          flex: 1;
        }

        .journey-cta {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.9rem;
          color: #3b82f6;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.3s ease;
        }

        .journey-card:hover .journey-cta {
          gap: 12px;
        }

        /* ================= RESPONSIVO (TELEMÓVEIS) ================= */
        @media (max-width: 992px) {
          .inicio-root {
            padding: 10px 20px; /* Reduz espaço no topo do mobile */
          }
          
          .hero-section {
            flex-direction: column-reverse; /* Mantém a imagem em cima do texto */
            text-align: center;
            gap: 24px; /* Reduz brutalmente o gap entre a foto e o nome */
            margin-bottom: 24px;
            padding-bottom: 24px;
          }
          
          .hero-image-wrapper {
            width: 260px; /* Imagem mais compacta no mobile */
            height: 260px;
            margin: 0 auto;
          }

          .status-wrapper {
            justify-content: center;
          }
          
          .hero-bio {
            margin: 0 auto 24px auto;
          }
          
          .hero-actions {
            justify-content: center;
          }
          
          .journey-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="status-wrapper">
            <span className="tech-badge">[ ENV: PRODUCTION ]</span>
            <div className="system-status">
              <span className="pulse-dot"></span> System Online
            </div>
          </div>
          <h1 className="hero-name"><span className="prompt-symbol-blue">&gt;_</span>Pedro Vale</h1>
          <p className="hero-bio">
            Futuro Engenheiro Informático em formação no ISTEC Porto. Movido pela curiosidade e pela resolução de problemas complexos, utilizo este espaço digital para partilhar a minha evolução técnica, os desafios superados e os projetos desenvolvidos.
          </p>
          <div className="hero-actions">
            <Link to="/evidencias/cenarios" className="btn-tech-primary">
              ./explorar_cenarios
            </Link>
            <Link to="/apresentacao" className="btn-tech-secondary">
              cat percurso.txt
            </Link>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src={profilePhoto} alt="Pedro Vale" className="profile-photo" />
        </div>
      </section>

      {/* ================= ENQUADRAMENTO (TERMINAL BLOCK) ================= */}
      <section className="portfolio-framework">
        <h2 className="tech-section-title">Enquadramento do Portfólio</h2>
        <p className="tech-section-subtitle">O objetivo e importância desta plataforma no desenvolvimento académico.</p>

        <div className="terminal-block">
          <div className="terminal-header">
            <div className="mac-controls">
              <div className="mac-dot" style={{ backgroundColor: '#ef4444' }}></div>
              <div className="mac-dot" style={{ backgroundColor: '#f59e0b' }}></div>
              <div className="mac-dot" style={{ backgroundColor: '#10b981' }}></div>
            </div>
            <span className="terminal-title">~/portfolio/README.md</span>
          </div>
          <div className="terminal-body">
            <div className="cmd-line">~ $ cat README.md</div>
            <p className="terminal-text">
              <span className="keyword-hl">import</span> <span className="string-hl">"academic_growth"</span>;
              <br /><br />
              Este E-Portfólio atua como o <i>log</i> central da minha evolução académica em Engenharia Informática. Aqui, os conceitos teóricos ganham forma através de evidências práticas e cenários de estudo, refletindo a sua aplicação direta na resolução de problemas concretos.
            </p>
            <p className="terminal-text">
              Funciona, também, como um mecanismo contínuo de autoavaliação e calibração de objetivos profissionais. Ao registar cada etapa e ferramenta dominada, construo uma fundação sólida que alinha o meu conhecimento com as elevadas exigências e ritmo do setor tecnológico atual. <span style={{ animation: 'pulse 1s infinite' }}>_</span>
            </p>
          </div>
        </div>
      </section>

      {/* ================= JORNADA ================= */}
      <section className="content-structure">
        <h2 className="tech-section-title">Jornada Portfólio</h2>
        <p className="tech-section-subtitle">A arquitetura e os pilares fundamentais desta plataforma académica.</p>

        <div className="journey-grid">
          
          {/* Cartão 1 */}
          <Link to="/apresentacao" className="journey-card" data-step="01">
            <div className="card-content">
              <span className="card-module">/usr/apresentacao</span>
              <h3 className="card-title">Apresentação</h3>
              <p className="card-desc">O meu percurso académico, competências técnicas core e o mapeamento dos meus objetivos profissionais.</p>
              <span className="journey-cta">Executar <span aria-hidden="true">→</span></span>
            </div>
          </Link>

          {/* Cartão 2 */}
          <Link to="/evidencias/cenarios" className="journey-card" data-step="02">
            <div className="card-content">
              <span className="card-module">/bin/evidencias</span>
              <h3 className="card-title">Evidências</h3>
              <p className="card-desc">Projetos práticos, cenários reais resolvidos, documentação técnica estruturada e artigos de investigação.</p>
              <span className="journey-cta">Consultar <span aria-hidden="true">→</span></span>
            </div>
          </Link>

          {/* Cartão 3 */}
          <Link to="/relatorio" className="journey-card" data-step="03">
            <div className="card-content">
              <span className="card-module">/var/log/relatorio</span>
              <h3 className="card-title">Relatório</h3>
              <p className="card-desc">Reflexões analíticas detalhadas sobre o processo de aprendizagem, os *bugs* superados e o crescimento técnico.</p>
              <span className="journey-cta">Ler Logs <span aria-hidden="true">→</span></span>
            </div>
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Inicio;