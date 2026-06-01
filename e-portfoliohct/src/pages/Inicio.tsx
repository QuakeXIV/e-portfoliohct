import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/FotoTipoPasse_PedroVale.jpg';

const Inicio: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para o Layout Tech / Terminal (Página Inicial) */}
      <style>{`
        /* ================= HERO SECTION ================= */
       /* ================= HERO SECTION ================= */
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          margin-bottom: 80px;
          padding-bottom: 60px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        /* CORREÇÃO PRINCIPAL: Empilhar texto na vertical */
        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          max-width: 650px;
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
          margin-bottom: 24px;
          letter-spacing: 0.05em;
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

        /* CORREÇÃO DOS BOTÕES: Forçar linha na horizontal */
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
          white-space: nowrap; /* Evita que o texto do botão quebre */
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

        /* ================= FRAMEWORK SECTION ================= */
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
          margin: 0 0 32px 0;
        }

        .framework-content {
          background: #f8fafc;
          border-left: 4px solid #3b82f6;
          padding: 24px 32px;
          border-radius: 0 12px 12px 0;
          margin-bottom: 80px;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.02);
        }

        .framework-text {
          color: var(--text-p, #475569);
          font-size: 1.05rem;
          line-height: 1.8;
          margin: 0 0 16px 0;
        }
        
        .framework-text:last-child {
          margin-bottom: 0;
        }

        /* ================= JOURNEY SECTION ================= */
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 40px;
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

        /* Responsivo */
        @media (max-width: 992px) {
          .hero-section {
            flex-direction: column-reverse;
            text-align: center;
            gap: 40px;
          }
          .hero-bio {
            margin: 0 auto 32px auto;
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
          <span className="tech-badge">[ ENV: PRODUCTION ]</span>
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

      {/* ================= ENQUADRAMENTO ================= */}
      <section className="portfolio-framework">
        <h2 className="tech-section-title">Enquadramento do Portfólio</h2>
        <p className="tech-section-subtitle">O objetivo e importância desta plataforma no desenvolvimento académico.</p>

        <div className="framework-content">
          <p className="framework-text">
            Este E-Portfólio atua como o <i>log</i> central da minha evolução académica em Engenharia Informática. Aqui, os conceitos teóricos ganham forma através de evidências práticas e cenários de estudo, refletindo a sua aplicação direta na resolução de problemas concretos.
          </p>
          <p className="framework-text">
            Funciona, também, como um mecanismo contínuo de autoavaliação e calibração de objetivos profissionais. Ao registar cada etapa e ferramenta dominada, construo uma fundação sólida que alinha o meu conhecimento com as elevadas exigências e ritmo do setor tecnológico atual.
          </p>
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
              <span className="card-module">MODULE 01</span>
              <h3 className="card-title">Apresentação</h3>
              <p className="card-desc">O meu percurso académico, competências técnicas core e o mapeamento dos meus objetivos profissionais.</p>
              <span className="journey-cta">Executar <span aria-hidden="true">→</span></span>
            </div>
          </Link>

          {/* Cartão 2 */}
          <Link to="/evidencias/cenarios" className="journey-card" data-step="02">
            <div className="card-content">
              <span className="card-module">MODULE 02</span>
              <h3 className="card-title">Evidências</h3>
              <p className="card-desc">Projetos práticos, cenários reais resolvidos, documentação técnica estruturada e artigos de investigação.</p>
              <span className="journey-cta">Consultar <span aria-hidden="true">→</span></span>
            </div>
          </Link>

          {/* Cartão 3 */}
          <Link to="/relatorio" className="journey-card" data-step="03">
            <div className="card-content">
              <span className="card-module">MODULE 03</span>
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