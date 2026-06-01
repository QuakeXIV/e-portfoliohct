import React from 'react';

interface ScenarioFile {
  label: string;
  path: string;
}

interface ScenarioItem {
  title: string;
  files: ScenarioFile[];
}

const scenarios: ScenarioItem[] = [
  {
    title: 'Cenário 1 - Autarquia Portuguesa e a implementação de Inteligência Artificial',
    files: [
      { label: 'Cenário 1.docx', path: '/evidencias/cenarios/cenario_1.docx' }
    ]
  },
  {
    title: 'Cenário 2 - Uma exposição interativa intitulada “Da Ciência Antiga à Tecnociência”',
    files: [
      { label: 'Cenario2_PedroVale_CarlosSilva_1LEI.docx', path: '/evidencias/cenarios/cenario_2.docx' }
    ]
  },
  {
    title: 'Cenário 3 - Modernização da Fábrica TecnoMetal através da Indústria 4.0',
    files: [
      { label: 'ApendiceA_PedroValeCarlosSilva_Cenario3.docx', path: '/evidencias/cenarios/cenario_3/apendice_a.docx' },
      { label: 'Cenario3_PedroValeCarlosSilva - Cópia.docx', path: '/evidencias/cenarios/cenario_3/cenario_3.docx' }
    ]
  },
  {
    title: 'Cenário 4 - O Programa que Quase Nunca Falha',
    files: [
      { label: 'ApendiceA_PedroValeCarlosSilva_Cenario3.docx', path: '/evidencias/cenarios/cenario_4/apendice_a.docx' },
      { label: 'Cenário 4 - Grupo 2.docx', path: '/evidencias/cenarios/cenario_4/cenario_4.docx' }
    ]
  },
  {
    title: 'Cenário 5 - Serendipidade em Engenharia Informática',
    files: [
      { label: 'Apêndice A - Cenário 5 Grupo 6.docx', path: '/evidencias/cenarios/cenario_5/apendice_a.docx' },
      { label: 'Mini Relatório - Cenário 5 Versão 1.docx', path: '/evidencias/cenarios/cenario_5/mini_relatorio_v1.docx' },
      { label: 'Mini Relatório - Cenário 5 Versão 2.docx', path: '/evidencias/cenarios/cenario_5/mini_relatorio_v2.docx' },
      { label: 'Mini Relatório - Cenário 5 Versão 3.docx', path: '/evidencias/cenarios/cenario_5/mini_relatorio_v3.docx' }
    ]
  },
  {
    title: 'Cenário 6 - A Transformação da Unidade de Produção "EcoLogística"',
    files: [
      { label: 'Apêndice A - Cenário 6 Grupo 6.docx', path: '/evidencias/cenarios/cenario_6/apendice_a.docx' },
      { label: 'Mini Relatório - Grupo 6 - Versão 1.docx', path: '/evidencias/cenarios/cenario_6/mini_relatorio_v1.docx' },
      { label: 'Mini Relatório - Grupo 6 - Versão 2.docx', path: '/evidencias/cenarios/cenario_6/mini_relatorio_v2.docx' },
      { label: 'Mini Relatório - Grupo 6 - Versão 3.docx', path: '/evidencias/cenarios/cenario_6/mini_relatorio_v3.docx' }
    ]
  },
  {
    title: 'Cenário 7 - Moldando o Futuro Digital da Europa / “Empresa de entrega com drones autónomos numa cidade inteligente" / Hospital Inteligente',
    files: [
      { label: 'Mini Relatório - Versão 1.docx', path: '/evidencias/cenarios/cenario_7/mini_relatorio_v1.docx' },
      { label: 'Mini Relatório - Versão 2.docx', path: '/evidencias/cenarios/cenario_7/mini_relatorio_v2.docx' },
      { label: 'Mini Relatório - Versão 3.docx', path: '/evidencias/cenarios/cenario_7/mini_relatorio_v3.docx' }
    ]
  },
  {
    title: 'Cenário 8 - NetZero 2050 / Redução de emissões da EcoMetal',
    files: [
      { label: 'Apêndice A - Cenário 8 Grupo 6.docx', path: '/evidencias/cenarios/cenario_8/apendice_a.docx' },
      { label: 'Mini-Relatório Parte Prática - Versão 1.docx', path: '/evidencias/cenarios/cenario_8/mini_relatorio_v1.docx' },
      { label: 'Mini-Relatório Parte Prática - Versão 2.docx', path: '/evidencias/cenarios/cenario_8/mini_relatorio_v2.docx' },
      { label: 'Mini-Relatório Parte Prática - Versão 3.docx', path: '/evidencias/cenarios/cenario_8/mini_relatorio_v3.docx' }
    ]
  },
  {
    title: 'Resposta à Ciência Aberta',
    files: [
          { label: 'Ciência Aberta', path: '/evidencias/cenarios/resposta_ciencia_aberta.docx' }
    ]
  }
];

const Cenarios: React.FC = () => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
      
      {/* CSS Embutido para o Layout Árvore de Ficheiros Git */}
      <style>{`
        .scenarios-header {
          text-align: left;
          margin-bottom: 50px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .scenarios-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol-indigo {
          color: #6366f1;
          margin-right: 10px;
        }

        .scenarios-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .scenario-item {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }

        .scenario-item[open] {
          border-color: #818cf8;
          box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.05);
        }

        .scenario-item:hover {
          border-color: #a5b4fc;
        }

        .scenario-summary {
          padding: 18px 24px;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-h, #1e293b);
          cursor: pointer;
          user-select: none;
          display: flex;
          align-items: center;
          gap: 12px;
          list-style: none;
          transition: background 0.2s ease;
        }

        .scenario-summary::-webkit-details-marker {
          display: none;
        }

        .scenario-summary::before {
          content: '⊞';
          color: #6366f1;
          font-size: 1.2rem;
          transition: transform 0.2s ease;
        }

        .scenario-item[open] .scenario-summary::before {
          content: '⊟';
          color: #4f46e5;
        }

        .scenario-summary:hover {
          background: #f8fafc;
        }

        .file-panel {
          padding: 24px 32px 32px 32px;
          background: #fafafa;
          border-top: 1px solid var(--border, #e2e8f0);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .files-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 12px;
          margin-top: 8px;
        }

        .file-link {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          padding: 14px 20px;
          border-radius: 6px;
          color: var(--text-h, #334155);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.2s ease;
          font-family: '"Fira Code", monospace', sans-serif;
          word-break: break-all;
        }

        .file-link::after {
          content: 'download';
          font-size: 0.7rem;
          text-transform: uppercase;
          background: #f1f5f9;
          color: #64748b;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 700;
          letter-spacing: 0.05em;
          flex-shrink: 0;
          margin-left: 10px;
        }

        .file-link:hover {
          border-color: #818cf8;
          color: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }

        .file-link:hover::after {
          background: #e0e7ff;
          color: #4f46e5;
        }

        .file-icon {
          margin-right: 10px;
          color: #6366f1;
          font-size: 1.05rem;
        }
      `}</style>

      <div className="scenarios-header">
        <h1><span className="prompt-symbol-indigo">&gt;_</span>git log --tree ./cenarios</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          Repositório de resoluções estruturadas, relatórios técnicos e apêndices das etapas de aprendizagem.
        </p>
      </div>

      <div className="scenarios-list">
        {scenarios.map((scenario) => (
          <details key={scenario.title} className="scenario-item">
            <summary className="scenario-summary">
              <span>{scenario.title}</span>
            </summary>
            
            <div className="file-panel">
              <div className="files-container">
                {scenario.files.map((file) => (
                  <a
                    key={file.path}
                    href={encodeURI(file.path)}
                    target="_blank"
                    rel="noreferrer"
                    className="file-link"
                  >
                    <span>
                      <span className="file-icon">🗎</span>
                      {file.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>

    </div>
  );
};

export default Cenarios;