import React from 'react';

const Artigo: React.FC = () => {
  const pdfPath = encodeURI('/evidencias/Artigo/Artigo Científico - Grupo 6.pdf');

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para o Layout do Visualizador de PDF */}
      <style>{`
        .article-header {
          text-align: left;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .article-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol-purple {
          color: #a855f7;
          margin-right: 10px;
        }

        /* Janela do Visualizador (Estilo macOS / Editor) */
        .pdf-window {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .pdf-window-bar {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mac-controls {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .mac-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #10b981; }

        .file-path {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #64748b;
          margin-left: 16px;
        }

        /* Botão de RAW / Nova Aba */
        .btn-raw {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #475569;
          padding: 6px 14px;
          border-radius: 6px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.8rem;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .btn-raw:hover {
          background: #a855f7;
          color: #ffffff;
          border-color: #a855f7;
          transform: translateY(-1px);
          box-shadow: 0 4px 6px -1px rgba(168, 85, 247, 0.2);
        }

        /* Área do iframe */
        .pdf-content {
          width: 100%;
          height: 75vh;
          min-height: 600px;
          background: #e2e8f0; /* Cor de fundo caso o PDF demore a carregar */
          display: block;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .pdf-window-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .file-path {
            margin-left: 0;
          }
          .btn-raw {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="article-header">
        <h1><span className="prompt-symbol-purple">&gt;_</span>open ./artigo_cientifico.pdf</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          Visualizador integrado do artigo académico desenvolvido ao longo da Unidade Curricular.
        </p>
      </div>

      {/* Janela do PDF */}
      <div className="pdf-window">
        
        {/* Barra Superior da Janela */}
        <div className="pdf-window-bar">
          <div className="mac-controls">
            <div className="mac-dot dot-red"></div>
            <div className="mac-dot dot-yellow"></div>
            <div className="mac-dot dot-green"></div>
            <span className="file-path">~/evidencias/Artigo/Artigo_Grupo6.pdf</span>
          </div>

          <a className="btn-raw" href={pdfPath} target="_blank" rel="noreferrer">
            [ Abrir_Raw ]
          </a>
        </div>

        {/* Iframe do PDF */}
        <iframe
          className="pdf-content"
          src={pdfPath}
          title="Artigo Científico"
          frameBorder="0"
          loading="lazy"
        />
      </div>

    </div>
  );
};

export default Artigo;