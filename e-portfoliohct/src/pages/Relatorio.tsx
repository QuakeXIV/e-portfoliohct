import React from 'react';

const Relatorio: React.FC = () => {
  return (
    <div style={{ maxWidth: '950px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para o Layout Editor / Logs */}
      <style>{`
        .report-header {
          text-align: left;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .report-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol-amber {
          color: #f59e0b;
          margin-right: 10px;
        }

        /* Janela do Editor / Log Viewer */
        .log-window {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          position: relative;
        }

        /* Barra superior do editor (estilo macOS) */
        .log-window-bar {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mac-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .log-title {
          margin-left: 15px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #64748b;
        }

        /* Área de conteúdo do relatório */
        .log-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Cada secção do relatório */
        .log-section {
          position: relative;
          padding-left: 30px;
          border-left: 2px solid #fef3c7; /* Linha de tracking */
          transition: border-color 0.3s ease;
        }

        .log-section:hover {
          border-left-color: #f59e0b;
        }

        .section-tag {
          position: absolute;
          left: -32px;
          top: -4px;
          background: #fef3c7;
          color: #d97706;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #fde68a;
          transition: all 0.3s ease;
        }

        .log-section:hover .section-tag {
          background: #f59e0b;
          color: white;
          border-color: #d97706;
          transform: scale(1.05);
        }

        .log-heading {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.3rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 16px 0;
          font-weight: 700;
          padding-top: 2px;
        }

        .log-text {
          color: var(--text-p, #475569);
          line-height: 1.8;
          margin: 0;
          font-size: 1rem;
          text-align: justify;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .log-content {
            padding: 24px 20px;
          }
          .log-text {
            text-align: left;
          }
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="report-header">
        <h1><span className="prompt-symbol-amber">&gt;_</span>Relatório Reflexivo</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          Autoavaliação e síntese crítica do percurso na Unidade Curricular.
        </p>
      </div>

      {/* Janela de Relatório */}
      <div className="log-window">
        <div className="log-window-bar">
          <div className="mac-dot dot-red"></div>
          <div className="mac-dot dot-yellow"></div>
          <div className="mac-dot dot-green"></div>
          <span className="log-title">~/portfolio/docs/relatorio_final.md</span>
        </div>

        <div className="log-content">
          
          {/* Secção 1 */}
          <div className="log-section">
            <span className="section-tag">01</span>
            <h2 className="log-heading">Introdução e Metodologia</h2>
            <p className="log-text">
              Este documento reflete a minha evolução ao longo da unidade curricular de História da Ciência e das Técnicas (1º ano de Engenharia Informática). Longe de ser um simples arquivo de trabalhos académicos, este portfólio atua como um instrumento de metacognição. Cada cenário aqui analisado resultou de um processo iterativo e aprofundado: desde a pesquisa teórica e o debate entre pares, até à validação estruturada com ferramentas de Inteligência Artificial Generativa (IAG), consolidando o meu pensamento crítico e a minha capacidade argumentativa.
            </p>
          </div>

          {/* Secção 2 */}
          <div className="log-section">
            <span className="section-tag">02</span>
            <h2 className="log-heading">Desafios e Contexto Regulatório</h2>
            <p className="log-text">
              A transição de modelos teóricos para arquiteturas de sistemas levanta desafios complexos. Desenhar infraestruturas para Cidades Inteligentes (<i>Smart Cities</i>) ou Hospitais Inteligentes obrigou-me a ponderar o equilíbrio entre a inovação tecnológica e o cumprimento de normativas legais rigorosas, nomeadamente o RGPD e o <i>AI Act</i>. Para compreender a otimização de latência em operações industriais críticas e a modernização de sistemas legados, analisei o potencial do <i>Edge Computing</i> e dos <i>Digital Twins</i>. Este percurso exigiu uma elevada capacidade de filtragem de informação, cultivando uma "mente preparada" para identificar soluções de alto impacto face à rápida emergência de novas tecnologias.
            </p>
          </div>

          {/* Secção 3 */}
          <div className="log-section">
            <span className="section-tag">03</span>
            <h2 className="log-heading">Evolução do Pensamento e Compreensão Sistémica</h2>
            <p className="log-text">
              Analisando as primeiras etapas desenvolvidas neste percurso, noto uma clara evolução analítica. Inicialmente, o foco incidia na transposição de filosofias científicas para a tecnologia — como a aplicação do falsificacionismo de Popper aos testes de software ou a interpretação de falhas sistémicas através das revoluções científicas de Kuhn. Gradualmente, a minha visão escalou para a resiliência e otimização à escala da Indústria 4.0 e 5.0. Desenvolvi uma preocupação central em mitigar vulnerabilidades e eliminar pontos únicos de falha (<i>Single Points of Failure</i>), integrando conceitos avançados como <i>Big Data</i>, <i>Smart Grids</i> e a indispensável transparência inerente à Inteligência Artificial Explicável (XAI).
            </p>
          </div>

          {/* Secção 4 */}
          <div className="log-section">
            <span className="section-tag">04</span>
            <h2 className="log-heading">Perspetivas Futuras e Visão Antropocêntrica</h2>
            <p className="log-text">
              A verdadeira conclusão desta unidade curricular reside na consciencialização da responsabilidade profissional. Compreendi que a sociedade e a indústria não exigem apenas a competência técnica prática, mas também a reflexão ética sobre o impacto das soluções desenvolvidas. Como futuro Engenheiro Informático, estabeleço como princípio fundamental que qualquer arquitetura tecnológica deve ser estritamente antropocêntrica. Ao colocar a premissa do ser humano no centro da decisão (<i>Human-in-the-Loop</i>), asseguro que as inovações criadas não são apenas tecnicamente robustas, mas também eticamente alinhadas com a resiliência e a sustentabilidade social. A minha auto-avalação final desta disciplina é de Muito Bom, dado que consegui evoluir o meu pensamento crítico e a capacidade de argumentar os meus pontos de vista de forma clara.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Relatorio;