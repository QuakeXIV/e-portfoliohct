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
        <h1><span className="prompt-symbol-amber">&gt;_</span>tail -f relatorio_reflexivo.log</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          Autoavaliação e síntese crítica do percurso e evolução técnica na Unidade Curricular.
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
            <h2 className="log-heading">Init_Context() : Introdução</h2>
            <p className="log-text">
              A elaboração deste documento representa um <i>dump</i> de memória essencial das aprendizagens adquiridas ao longo do semestre. Mais do que uma simples entrega académica, este portfólio digital constitui o ambiente de produção onde a teoria se converte em componentes funcionais. O processo exigiu uma análise estruturada, obrigando a transpor lógicas algorítmicas abstratas para aplicações responsivas, promovendo assim um exercício fundamental de metacognição tecnológica.
            </p>
          </div>

          {/* Secção 2 */}
          <div className="log-section">
            <span className="section-tag">02</span>
            <h2 className="log-heading">Debug_Mode() : Desafios & Soluções</h2>
            <p className="log-text">
              Durante o ciclo de desenvolvimento, a estruturação de interfaces dinâmicas, a gestão de estado complexa (utilizando ferramentas modernas como <i>hooks</i>) e a curva de aprendizagem associada a novas <i>frameworks</i> apresentaram-se como os maiores obstáculos. Para ultrapassar o temido <i>dependency hell</i> e garantir a escalabilidade do código, adotei uma abordagem de pesquisa iterativa, recorrendo a documentação técnica e modularização do projeto. Esta metodologia não só resolveu os erros de compilação, como purificou a arquitetura de *software* final.
            </p>
          </div>

          {/* Secção 3 */}
          <div className="log-section">
            <span className="section-tag">03</span>
            <h2 className="log-heading">System_Update() : Crescimento Técnico</h2>
            <p className="log-text">
              A análise retrospetiva demonstra uma mudança clara de paradigma: a evolução de uma mentalidade de "escrever *scripts* funcionais" para "engenharia de *software*". A adoção rigorosa dos princípios de <i>Clean Code</i> e o foco obsessivo na jornada do utilizador (UX/UI) transformaram o meu fluxo de trabalho. Percebi que o código bem escrito é aquele que é legível para humanos e não apenas para máquinas, elevando os meus padrões de otimização de <i>performance</i> e acessibilidade <i>web</i>.
            </p>
          </div>

          {/* Secção 4 */}
          <div className="log-section">
            <span className="section-tag">04</span>
            <h2 className="log-heading">Future_Builds() : Conclusão e Perspetivas</h2>
            <p className="log-text">
              Em suma, o desenvolvimento deste projeto provou ser o compilador ideal para o meu crescimento profissional. O paradigma daqui em diante assenta na Integração Contínua: o meu objetivo é manter o repositório deste portfólio ativo no GitHub, realizando <i>commits</i> regulares de novos projetos e tecnologias que vou masterizando. Como futuro Engenheiro, levo a convicção de que a tecnologia só cumpre o seu propósito quando desenhada para resolver problemas reais com segurança e eficiência.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Relatorio;