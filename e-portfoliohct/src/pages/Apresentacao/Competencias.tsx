import React from 'react';

const Competencias: React.FC = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para as Competências (Tema Terminal/Tech) */}
      <style>{`
        .skills-header {
          text-align: left;
          margin-bottom: 50px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .skills-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol {
          color: #3b82f6;
          margin-right: 10px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .skill-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 32px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        /* Barra de título do cartão a simular a aba de um editor de código */
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          opacity: 0.5;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: #93c5fd;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .skill-category-title {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.2rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 24px 0;
          font-weight: 700;
          display: flex;
          align-items: center;
        }

        .skill-category-title::before {
          content: '~/';
          color: #64748b;
          margin-right: 8px;
          font-weight: 400;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .skill-tag {
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.2s ease;
          cursor: default;
        }

        .skill-tag:hover {
          background: #eff6ff;
          color: #2563eb;
          border-color: #bfdbfe;
          transform: scale(1.05);
        }

        /* Responsivo para telemóveis */
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="skills-header">
        <h1><span className="prompt-symbol">&gt;_</span>cat skills.json</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          Mapeamento das tecnologias, linguagens e metodologias que compõem o meu stack técnico.
        </p>
      </div>

      {/* Grelha de Competências */}
      <div className="skills-grid">
        
        {/* Bloco 1: Marketing e Comunicação Digital */}
        <div className="skill-card">
          <h2 className="skill-category-title">marketing_digital</h2>
          <div className="tags-container">
            <span className="skill-tag">SEO / SEM</span>
            <span className="skill-tag">Gestão de Redes Sociais</span>
            <span className="skill-tag">Copywriting</span>
            <span className="skill-tag">Google Analytics</span>
            <span className="skill-tag">E-mail Marketing</span>
            <span className="skill-tag">Estratégia de Conteúdo</span>
            <span className="skill-tag">Tráfego Pago (Ads)</span>
            <span className="skill-tag">Inbound Marketing</span>
          </div>
        </div>

        {/* Bloco 2: Desenvolvimento de Software */}
        <div className="skill-card">
          <h2 className="skill-category-title">dev_software</h2>
          <div className="tags-container">
            <span className="skill-tag">HTML5 / CSS3</span>
            <span className="skill-tag">JavaScript/Typescript</span>
            <span className="skill-tag">Flutter/Dart</span>
            <span className="skill-tag">Java</span>
            <span className="skill-tag">SQL</span>
            <span className="skill-tag">React.js/Next.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Git / GitHub</span>
            <span className="skill-tag">REST APIs</span>
          </div>
        </div>

     {/* Bloco 3: Formação ISTEC */}
        <div className="skill-card">
          <h2 className="skill-category-title">formacao_istec</h2>
          <div className="tags-container">
            {/* Infraestrutura e Bases */}
            <span className="skill-tag">Sistemas Operativos</span>
            <span className="skill-tag">Redes de Computadores</span>
            <span className="skill-tag">Modelação de Bases de Dados</span>
            
            {/* Desenvolvimento e Estrutura */}
            <span className="skill-tag">Arquitetura de Sistemas</span>
            <span className="skill-tag">Desenvolvimento Móvel</span>
            <span className="skill-tag">UX / UI Design</span>
            
            {/* Gestão e Processos */}
            <span className="skill-tag">Gestão de Projetos de TI</span>
            <span className="skill-tag">Metodologias Ágeis (Scrum)</span>
          </div>
        </div>

        {/* Bloco 4: Ferramentas e Infraestrutura */}
        <div className="skill-card">
          <h2 className="skill-category-title">infraestrutura</h2>
          <div className="tags-container">
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">Linux</span>
            <span className="skill-tag">VS Code/Visual Studio/XCode</span>
            <span className="skill-tag">Terminal / Shell</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">Cloud (AWS/Azure)</span>
            <span className="skill-tag">Virtualização</span>
            <span className="skill-tag">Automação</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Competencias;