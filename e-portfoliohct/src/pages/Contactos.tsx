import React from 'react';

const Contactos: React.FC = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para o Layout Tech / Contactos */}
      <style>{`
        .contact-header {
          text-align: left;
          margin-bottom: 50px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .contact-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol-teal {
          color: #0891b2;
          margin-right: 10px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 32px;
        }

        /* Coluna da Esquerda (Informações) */
        .info-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 24px;
          transition: transform 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: transparent;
          transition: background 0.3s ease;
        }

        .contact-card:hover {
          transform: translateX(5px);
          border-color: #67e8f9;
        }

        .contact-card:hover::before {
          background: #0891b2;
        }

        .card-label {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
          display: block;
        }

        .card-value {
          font-size: 1.1rem;
          color: var(--text-h, #0f172a);
          font-weight: 600;
          margin: 0 0 12px 0;
          word-break: break-all;
        }

        .card-desc {
          font-size: 0.9rem;
          color: var(--text-p, #475569);
          margin: 0;
        }

        /* Botões Sociais */
        .social-buttons {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .btn-social {
          background: #0f172a;
          color: white;
          padding: 10px 16px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .btn-social:hover {
          background: #0891b2;
          transform: translateY(-2px);
        }

        /* Coluna da Direita (Formulário) */
        .form-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
        }

        .form-title {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.3rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 24px 0;
          font-weight: 700;
        }

        .form-title::before {
          content: 'POST /api/mensagem';
          display: block;
          font-size: 0.75rem;
          color: #0891b2;
          margin-bottom: 8px;
          font-weight: 400;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .tech-label {
          display: block;
          font-size: 0.9rem;
          font-weight: 600;
          color: #334155;
          margin-bottom: 8px;
        }

        .tech-input, .tech-textarea {
          width: 100%;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 12px 16px;
          font-family: inherit;
          font-size: 1rem;
          color: #0f172a;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .tech-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .tech-input:focus, .tech-textarea:focus {
          outline: none;
          border-color: #0891b2;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(8, 145, 178, 0.1);
        }

        .tech-input::placeholder, .tech-textarea::placeholder {
          color: #94a3b8;
        }

        .submit-btn {
          width: 100%;
          background: #0891b2;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .submit-btn:hover {
          background: #06b6d4;
          transform: translateY(-2px);
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="contact-header">
        <h1><span className="prompt-symbol-teal">&gt;_</span>./contact.sh</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          Aberto a novas oportunidades, esclarecimento de dúvidas e partilha de conhecimento técnico.
        </p>
      </div>

      <div className="contact-grid">
        
        {/* Lado Esquerdo - Informações de Contacto */}
        <div className="info-column">
          
          <div className="contact-card">
            <span className="card-label">const email = </span>
            <p className="card-value">pedro.vale@my.istec.pt</p>
            <p className="card-desc">E-mail institucional para contacto direto e formal.</p>
          </div>

          <div className="contact-card">
            <span className="card-label">const phone = </span>
            <p className="card-value">+351 963 964 890</p>
            <p className="card-desc">Disponibilidade para chamadas e resoluções rápidas.</p>
          </div>

          <div className="contact-card">
            <span className="card-label">import {`{ networks }`}</span>
            <p className="card-desc" style={{ marginBottom: '12px' }}>
              Acompanha o meu percurso e o código dos meus projetos nas plataformas:
            </p>
            <div className="social-buttons">
              <a href="#" target="_blank" className="btn-social">
                in LinkedIn
              </a>
              <a href="#" target="_blank" className="btn-social" style={{ background: '#333' }}>
                &lt;/&gt; GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Lado Direito - Formulário */}
        <div className="form-column">
          <div className="form-card">
            <h2 className="form-title">Enviar Mensagem</h2>
            
            {/* O "action" pode ser configurado mais tarde para enviar um email real */}
            <form action="#" method="POST">
              <div className="form-group">
                <label className="tech-label">Nome Completo</label>
                <input 
                  type="text" 
                  name="nome" 
                  className="tech-input" 
                  placeholder="Escreve o teu nome" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="tech-label">Correio Eletrónico</label>
                <input 
                  type="email" 
                  name="email" 
                  className="tech-input" 
                  placeholder="exemplo@dominio.com" 
                  required 
                />
              </div>

              <div className="form-group">
                <label className="tech-label">Mensagem</label>
                <textarea 
                  name="mensagem" 
                  className="tech-textarea" 
                  placeholder="Escreve a tua mensagem..." 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                [ Executar Envio ]
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contactos;