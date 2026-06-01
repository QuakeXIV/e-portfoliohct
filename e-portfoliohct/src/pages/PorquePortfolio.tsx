import React from 'react';

const ObjetivoPortfolio: React.FC = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para o Layout Tech / Git */}
      <style>{`
        .readme-header {
          text-align: left;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .readme-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol-purple {
          color: #8b5cf6; /* Roxo para diferenciar das outras páginas */
          margin-right: 10px;
        }

        .readme-intro {
          background: #f8fafc;
          border-left: 4px solid #8b5cf6;
          padding: 24px;
          border-radius: 0 12px 12px 0;
          margin-bottom: 50px;
          color: #475569;
          font-size: 1.05rem;
          line-height: 1.7;
          box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.02);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .git-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 40px 32px;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Marca de água com o número gigante (estilo Git/Terminal) */
        .git-card::after {
          content: attr(data-number);
          position: absolute;
          top: 10px;
          right: 20px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 5rem;
          font-weight: 900;
          color: #f1f5f9;
          opacity: 0.7;
          z-index: 0;
          pointer-events: none;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .git-card:hover {
          transform: translateY(-5px);
          border-color: #c4b5fd;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .git-card:hover::after {
          color: #ede9fe;
          transform: scale(1.1);
        }

        .git-card-content {
          position: relative;
          z-index: 1;
        }

        .git-card-title {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.25rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 16px 0;
          font-weight: 700;
          display: flex;
          align-items: center;
        }

        .git-card-title::before {
          content: 'git commit -m "';
          color: #8b5cf6;
          margin-right: 8px;
          font-weight: 400;
          font-size: 0.9rem;
        }

        .git-card-title::after {
          content: '"';
          color: #8b5cf6;
          margin-left: 4px;
          font-weight: 400;
          font-size: 0.9rem;
        }

        .git-card-desc {
          color: var(--text-p, #475569);
          line-height: 1.7;
          margin: 0;
          font-size: 0.95rem;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="readme-header">
        <h1><span className="prompt-symbol-purple">&gt;_</span>cat README.md</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          A fundação deste repositório e o propósito estratégico por trás do portfólio.
        </p>
      </div>

      {/* Introdução Textual */}
      <div className="readme-intro">
        Mais do que um simples currículo em formato PDF, encaro a criação deste e-portfólio como o desenvolvimento de um repositório vivo. É aqui que documento *commits* de conhecimento, reflicto sobre a minha evolução na Engenharia Informática e transformo o meu percurso académico e profissional numa aplicação interativa e escalável.
      </div>

      {/* Grelha de Cartões */}
      <div className="cards-grid">
        
        {/* Cartão 1 */}
        <div className="git-card" data-number="01">
          <div className="git-card-content">
            <h2 className="git-card-title">refatoracao_continua</h2>
            <p className="git-card-desc">
              Obrigou-me a analisar criticamente o meu próprio código e percurso, permitindo identificar lacunas no meu conhecimento técnico e otimizar a minha curva de aprendizagem a cada semestre.
            </p>
          </div>
        </div>

        {/* Cartão 2 */}
        <div className="git-card" data-number="02">
          <div className="git-card-content">
            <h2 className="git-card-title">deploy_de_skills</h2>
            <p className="git-card-desc">
              Em vez de apenas listar linguagens ou ferramentas, este espaço funciona como ambiente de produção. Permite demonstrar na prática a minha capacidade de desenvolvimento web e estruturação de interfaces.
            </p>
          </div>
        </div>

        {/* Cartão 3 */}
        <div className="git-card" data-number="03">
          <div className="git-card-content">
            <h2 className="git-card-title">merge_de_conhecimento</h2>
            <p className="git-card-desc">
              Funciona como o <i>branch</i> principal onde integro conceitos de várias disciplinas. É o ecossistema ideal para correlacionar redes, bases de dados, segurança e programação num único produto visível.
            </p>
          </div>
        </div>

        {/* Cartão 4 */}
        <div className="git-card" data-number="04">
          <div className="git-card-content">
            <h2 className="git-card-title">git_push_carreira</h2>
            <p className="git-card-desc">
              Estabelece a minha assinatura digital no mercado. Uma base aberta, organizada e profissional, construída para ser partilhada com potenciais recrutadores, demonstrando não só o que sei fazer, mas como penso.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ObjetivoPortfolio;