import React from 'react';

const Percurso: React.FC = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para o Layout Original e Animações */}
      <style>{`
        .academic-path-header {
          text-align: left;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .academic-path-header h1 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        /* Animação de pulso para os nós (commits) */
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }

        .tech-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tech-step {
          display: flex;
          position: relative;
          min-height: 200px;
        }

        /* Linha tracejada a simular um branch de Git */
        .tech-step:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 50px;
          bottom: -50px;
          left: 170px; /* Alinhado com o dot */
          width: 2px;
          background-image: linear-gradient(to bottom, #3b82f6 50%, transparent 50%);
          background-size: 2px 14px;
          z-index: 0;
        }

        /* Coluna da Esquerda (Datas) */
        .step-time {
          width: 150px;
          padding-top: 15px;
          text-align: right;
          padding-right: 40px;
          position: relative;
        }

        .year-main {
          display: block;
          font-size: 2.2rem;
          font-weight: 900;
          color: var(--text-h, #1e293b);
          line-height: 1;
        }

        .year-sub {
          display: block;
          font-size: 0.85rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 5px;
          font-weight: 600;
        }

        /* Ponto de Ligação (Dot) */
        .step-dot {
          position: absolute;
          right: -9px; /* Centrado no gap */
          top: 18px;
          width: 16px;
          height: 16px;
          background: #3b82f6;
          border-radius: 50%;
          z-index: 2;
          border: 3px solid var(--bg-app, #f8fafc);
          animation: pulseGlow 2.5s infinite;
        }

        /* Coluna da Direita (Conteúdo) */
        .step-content {
          flex: 1;
          padding-left: 50px;
          padding-bottom: 60px;
        }

        .step-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 0 24px 24px 24px;
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        /* Marca de água gigante com o ano atrás do texto */
        .step-card::before {
          content: attr(data-year);
          position: absolute;
          top: -20px;
          right: 20px;
          font-size: 8rem;
          font-weight: 900;
          color: #f1f5f9;
          opacity: 0.6;
          z-index: 0;
          pointer-events: none;
          transition: color 0.3s ease;
        }

        .step-card:hover {
          transform: translateX(10px);
          border-color: #93c5fd;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .step-card:hover::before {
          color: #e0e7ff;
        }

        .step-card > * {
          position: relative;
          z-index: 1;
        }

        .course-title {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.3rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 8px 0;
          font-weight: 700;
        }

        .institution-name {
          display: inline-block;
          background: #eff6ff;
          color: #2563eb;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .course-desc {
          color: var(--text-p, #475569);
          line-height: 1.8;
          margin: 0 0 24px 0;
          font-size: 1rem;
        }

        /* Tags de Competências */
        .tech-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .tag {
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          background: var(--bg-app, #f8fafc);
          border: 1px solid var(--border, #e2e8f0);
          padding: 6px 12px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Responsivo para telemóveis */
        @media (max-width: 768px) {
          .tech-step {
            flex-direction: column;
          }
          .step-time {
            text-align: left;
            padding-right: 0;
            padding-bottom: 20px;
            padding-left: 30px;
            width: 100%;
          }
          .step-dot {
            left: 0;
            top: 22px;
          }
          .tech-step:not(:last-child)::after {
            left: 7px;
            top: 40px;
            bottom: -20px;
          }
          .step-content {
            padding-left: 30px;
            padding-bottom: 40px;
          }
          .step-card {
            border-radius: 16px;
            padding: 24px;
          }
        }
      `}</style>

      <div className="academic-path-header">
        <h1>Compilar Conhecimento</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          O registo das minhas iterações académicas rumo à Engenharia de Software.
        </p>
      </div>

      <div className="tech-timeline">
        
        {/* ITERAÇÃO 1: Licenciatura */}
        <div className="tech-step">
          <div className="step-time">
            <span className="year-main">2025</span>
            <span className="year-sub">Presente</span>
            <div className="step-dot"></div>
          </div>
          <div className="step-content">
            <div className="step-card" data-year="25'">
              <h2 className="course-title">&gt;_ Licenciatura em Engenharia Informática</h2>
              <div className="institution-name">ISTEC Porto</div>
              <p className="course-desc">
                Estudo aprofundado do ecossistema de desenvolvimento web e mobile, desde a arquitetura estrutural até à implementação visual. Foco na resolução lógica de problemas e na engenharia de interfaces dinâmicas, aplicadas a cenários reais de interação digital e acessibilidade multiplataforma
              </p>
              <div className="tech-tags">
                <span className="tag">Web Dev</span>
                <span className="tag">Base de Dados</span>
                <span className="tag">Cloud Computing</span>
              </div>
            </div>
          </div>
        </div>

        {/* ITERAÇÃO 2: CTeSP */}
        <div className="tech-step">
          <div className="step-time">
            <span className="year-main">2023</span>
            <span className="year-sub">2025</span>
            <div className="step-dot" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="step-content">
            <div className="step-card" data-year="23'">
              <h2 className="course-title">&gt;_ CTeSP Desenvolvimento Mobile</h2>
              <div className="institution-name">ISTEC Porto</div>
              <p className="course-desc">
                Aquisição de competências práticas no desenvolvimento de aplicações nativas e na estruturação de interfaces web e mobile (UX/UI). Construção de bases técnicas sólidas em sistemas operativos, bases de dados e infraestruturas de redes informáticas.
              </p>
              <div className="tech-tags">
                <span className="tag">Mobile</span>
                <span className="tag">UX/UI Design</span>
                <span className="tag">Redes</span>
              </div>
            </div>
          </div>
        </div>

        {/* ITERAÇÃO 3: Secundário */}
        <div className="tech-step">
          <div className="step-time">
            <span className="year-main">2020</span>
            <span className="year-sub">2023</span>
            <div className="step-dot" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="step-content">
            <div className="step-card" data-year="20'">
              <h2 className="course-title">&gt;_ Técnico de Comunicação e Serviço Digital</h2>
              <div className="institution-name">Escola de Comércio do Porto</div>
              <p className="course-desc">
                Primeiro contacto com Web Development, desenvolvimento de competências na área da comunicação, marketing digital e design de interfaces.
              </p>
              <div className="tech-tags">
                <span className="tag">E-Commerce</span>
                <span className="tag">Marketing 4.0</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Percurso;