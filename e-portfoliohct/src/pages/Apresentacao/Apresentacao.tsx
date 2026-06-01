import React from 'react';
import profilePhoto from '../../assets/FotoTipoPasse_PedroVale.jpg';

const Apresentacao: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para o Layout Developer / Git Profile */}
      <style>{`
        .profile-header {
          text-align: left;
          margin-bottom: 50px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex-wrap: wrap;
          gap: 20px;
        }

        .profile-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol-green {
          color: #10b981;
          margin-right: 10px;
        }

        .branch-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f1f5f9;
          border: 1px solid #cbd5e1;
          padding: 6px 12px;
          border-radius: 6px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #475569;
          font-weight: 600;
        }

        .branch-icon { color: #10b981; }

        .profile-layout {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
          align-items: flex-start;
        }

        /* Lado Esquerdo - Conteúdo Principal */
        .main-content {
          flex: 1;
          min-width: 60%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .dev-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .dev-card:hover {
          border-color: #6ee7b7;
          box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.05);
        }

        .card-title {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.3rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 20px 0;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .keyword { color: #3b82f6; }
        .variable { color: #f59e0b; }
        .punctuation { color: #64748b; }

        .dev-text {
          color: var(--text-p, #475569);
          line-height: 1.8;
          font-size: 1.05rem;
          margin: 0;
          text-align: justify;
        }

        /* Listas de Objetivos e Valores */
        .tech-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .tech-list-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding-left: 16px;
          border-left: 2px solid #e2e8f0;
          transition: border-color 0.2s ease;
        }

        .tech-list-item:hover {
          border-left-color: #10b981;
        }

        .item-key {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.9rem;
          color: #10b981;
          font-weight: 600;
        }

        .item-value {
          color: var(--text-p, #475569);
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Terminal Decorativo (Para preencher espaço visual) */
        .terminal-block {
          background: #0f172a;
          border-radius: 12px;
          padding: 20px;
          font-family: '"Fira Code", monospace', sans-serif;
          color: #e2e8f0;
          font-size: 0.85rem;
          line-height: 1.6;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
        }

        .term-line { display: flex; gap: 10px; margin-bottom: 8px; }
        .term-time { color: #64748b; }
        .term-cmd { color: #38bdf8; }
        .term-success { color: #34d399; }
        .term-cursor {
          display: inline-block;
          width: 8px;
          height: 15px;
          background: #10b981;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }

        @keyframes blink { 50% { opacity: 0; } }

        /* Lado Direito - Sidebar do Perfil (Estilo GitHub) */
        .profile-sidebar {
          width: 320px;
          flex-shrink: 0;
          /* O SEGREDO PARA NÃO HAVER ESPAÇOS VAZIOS: */
          position: sticky;
          top: 40px; 
        }

        .github-card {
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          overflow: hidden;
        }

        .card-avatar-wrapper {
          padding: 32px 32px 16px 32px;
          display: flex;
          justify-content: center;
        }

        .card-avatar {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #ffffff;
          box-shadow: 0 4px 14px 0 rgba(0,0,0,0.1);
        }

        .card-info {
          padding: 0 32px 32px 32px;
        }

        .card-name {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          text-align: center;
          letter-spacing: -0.02em;
        }

        .card-course {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #10b981;
          margin: 8px 0 24px 0;
          text-align: center;
          font-weight: 600;
        }

        .json-info {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 16px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #334155;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .json-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .json-key { color: #d946ef; }
        .json-value { color: #0284c7; word-break: break-word; }

        /* Badges de Ferramentas */
        .skills-wrapper {
          margin-top: 24px;
          border-top: 1px dashed #cbd5e1;
          padding-top: 20px;
        }
        
        .skills-title {
          font-size: 0.85rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
          margin: 0 0 12px 0;
        }

        .badges-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          background: #e0e7ff;
          color: #4f46e5;
          border: 1px solid #c7d2fe;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: '"Fira Code", monospace', sans-serif;
        }

        /* Responsivo */
        @media (max-width: 992px) {
          .profile-layout {
            flex-direction: column-reverse;
          }
          .profile-sidebar {
            width: 100%;
            position: relative; /* Desliga o sticky em mobile */
            top: 0;
          }
          .card-avatar {
            width: 160px;
            height: 160px;
          }
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="profile-header">
        <div>
          <h1><span className="prompt-symbol-green">&gt;_</span>whoami --details</h1>
          <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
            Informação detalhada sobre o meu percurso, formação e visão técnica para o futuro.
          </p>
        </div>
        <div className="branch-badge">
          <span className="branch-icon">⑂</span> main
        </div>
      </div>

      <div className="profile-layout">
        
        {/* Lado Esquerdo - Conteúdo Principal */}
        <div className="main-content">
          
          <article className="dev-card">
            <h2 className="card-title">
              <span className="keyword">const</span> 
              <span className="variable">developer</span> 
              <span className="punctuation">=</span> 
              <span className="keyword">new</span> Profile();
            </h2>
            <p className="dev-text">
              Construir soluções digitais que ganham vida nos navegadores e nos smartphones é o desafio que mais me motiva. Atualmente a frequentar a Licenciatura em Engenharia Informática no ISTEC Porto, procuro traduzir a lógica complexa dos algoritmos em aplicações responsivas, rápidas e intuitivas. O meu objetivo passa por desenhar software limpo e escalável, guiando-me sempre pela premissa de que a exigência técnica e a curiosidade inesgotável são a base para criar tecnologia com verdadeiro impacto.
            </p>
          </article>

          <article className="dev-card">
            <h2 className="card-title">
              <span className="keyword">const</span> 
              <span className="variable">objetivos</span> 
              <span className="punctuation">=</span> [ ... ];
            </h2>
            <div className="tech-list">
              <div className="tech-list-item">
                <span className="item-key">"Especialização"</span>
                <p className="item-value">Aprofundar competências práticas e teóricas em Desenvolvimento Web e Móvel.</p>
              </div>
              <div className="tech-list-item">
                <span className="item-key">"Certificações"</span>
                <p className="item-value">Dominar frameworks modernos e manter-me ao corrente das novas tendências e exigências do mercado tecnológico.</p>
              </div>
              <div className="tech-list-item">
                <span className="item-key">"Projetos Reais"</span>
                <p className="item-value">Integrar equipas de desenvolvimento de grande dimensão, aplicando metodologias ágeis em ambiente de produção.</p>
              </div>
            </div>
          </article>

          <article className="dev-card">
            <h2 className="card-title">
              <span className="keyword">const</span> 
              <span className="variable">core_values</span> 
              <span className="punctuation">=</span> [ ... ];
            </h2>
            <div className="tech-list">
              <div className="tech-list-item">
                <span className="item-key">"Responsabilidade e Qualidade"</span>
                <p className="item-value">Escrever código sustentável, escalável e de alta qualidade (Clean Code).</p>
              </div>
              <div className="tech-list-item">
                <span className="item-key">"Segurança (Safe Code)"</span>
                <p className="item-value">Implementação rigorosa de boas práticas de proteção de dados e mitigação de vulnerabilidades no software.</p>
              </div>
              <div className="tech-list-item">
                <span className="item-key">"Trabalho em Equipa"</span>
                <p className="item-value">Valorização da colaboração ativa, entreajuda técnica e comunicação transparente entre pares.</p>
              </div>
            </div>
          </article>

          {/* Terminal Falso para preencher o layout vertical e reforçar o tema */}
          <div className="terminal-block">
            <div className="term-line">
              <span className="term-time">[10:45:01]</span>
              <span className="term-cmd">Compiling profile dependencies...</span>
            </div>
            <div className="term-line">
              <span className="term-time">[10:45:02]</span>
              <span className="term-success">✓ 100% Core values loaded.</span>
            </div>
            <div className="term-line">
              <span className="term-time">[10:45:03]</span>
              <span className="term-success">✓ 100% Academic objectives mapped.</span>
            </div>
            <div className="term-line">
              <span className="term-time">[10:45:04]</span>
              <span>Ready to build the future. <span className="term-cursor"></span></span>
            </div>
          </div>

        </div>

        {/* Lado Direito - Sidebar do Perfil */}
        <aside className="profile-sidebar">
          <div className="github-card">
            <div className="card-avatar-wrapper">
              <img src={profilePhoto} alt="Pedro Vale" className="card-avatar" />
            </div>
            
            <div className="card-info">
              <h2 className="card-name">Pedro Vale</h2>
              <p className="card-course">&lt; Engenharia Informática /&gt;</p>

              <div className="json-info">
                <div className="json-row">
                  <span className="json-key">"instituicao":</span>
                  <span className="json-value">"ISTEC Porto"</span>
                </div>
                
                <div className="json-row">
                  <span className="json-key">"localizacao":</span>
                  <span className="json-value">"Porto, Portugal"</span>
                </div>

                <div className="json-row">
                  <span className="json-key">"foco_principal":</span>
                  <span className="json-value">"Desenvolvimento Web e Móvel"</span>
                </div>
                
                <div className="json-row">
                  <span className="json-key">"status":</span>
                  <span className="json-value" style={{ color: '#10b981' }}>"Em formação"</span>
                </div>
              </div>

              {/* Nova Secção de Badges na Sidebar */}
              <div className="skills-wrapper">
                <h3 className="skills-title">Stack & Ferramentas</h3>
                <div className="badges-grid">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">Git</span>
                  <span className="tech-badge">HTML/CSS</span>
                  <span className="tech-badge">Figma</span>
                </div>
              </div>

            </div>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Apresentacao;