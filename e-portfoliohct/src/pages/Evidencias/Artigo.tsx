import React from 'react';

const Artigo: React.FC = () => {
  const pdfPath = encodeURI('/evidencias/Artigo/Artigo Científico - Grupo 6.pdf');

  return (
    <div>
      <section className="page-hero">
        <span className="eyebrow">Artigo Científico</span>
        <h1 className="page-title">Consulta o artigo académico</h1>
        <p className="page-subtitle">
          Visualize o PDF diretamente nesta página ou abra o documento numa nova aba para descarregar.
        </p>
      </section>

      <div className="pdf-panel">
        <iframe
          src={pdfPath}
          title="Artigo Científico"
          style={{ width: '100%', height: '100%', border: 0, minHeight: '72vh' }}
          loading="lazy"
        />
      </div>

      <div className="pdf-actions">
        <a className="pdf-link" href={pdfPath} target="_blank" rel="noreferrer">
          Abrir PDF em nova aba
        </a>
      </div>
    </div>
  );
};

export default Artigo;
