import React from 'react';

interface ScenarioFile {
  label: string;
  path: string;
}

interface ScenarioItem {
  title: string;
  description: string;
  files: ScenarioFile[];
}

const scenarios: ScenarioItem[] = [
  {
    title: 'Cenário 1',
    description: 'Documento principal de Cenário 1',
    files: [
      { label: 'Cenário 1.docx', path: '/evidencias/Cenários/Cenário 1.docx' }
    ]
  },
  {
    title: 'Cenário 2',
    description: 'Documento principal de Cenário 2',
    files: [
      { label: 'Cenario2_PedroVale_CarlosSilva_1LEI.docx', path: '/evidencias/Cenários/Cenario2_PedroVale_CarlosSilva_1LEI.docx' }
    ]
  },
  {
    title: 'Cenário 3',
    description: 'Documentos do Cenário 3',
    files: [
      { label: 'ApendiceA_PedroValeCarlosSilva_Cenario3.docx', path: '/evidencias/Cenários/Cenario3_PedroValeCarlosSilva/ApendiceA_PedroValeCarlosSilva_Cenario3.docx' },
      { label: 'Cenario3_PedroValeCarlosSilva - Cópia.docx', path: '/evidencias/Cenários/Cenario3_PedroValeCarlosSilva/Cenario3_PedroValeCarlosSilva - Cópia.docx' }
    ]
  },
  {
    title: 'Cenário 4',
    description: 'Documentos do Cenário 4',
    files: [
      { label: 'ApendiceA_PedroValeCarlosSilva_Cenario3.docx', path: '/evidencias/Cenários/Cenario4_PedroValeCarlosSilva/ApendiceA_PedroValeCarlosSilva_Cenario3.docx' },
      { label: 'Cenário 4 - Grupo 2.docx', path: '/evidencias/Cenários/Cenario4_PedroValeCarlosSilva/Cenário 4 - Grupo 2.docx' }
    ]
  },
  {
    title: 'Cenário 5',
    description: 'Documentos do Cenário 5 Grupo 6',
    files: [
      { label: 'Apêndice A - Cenário 5 Grupo 6.docx', path: '/evidencias/Cenários/Cenario 5 Grupo 6/Apêndice A - Cenário 5 Grupo 6.docx' },
      { label: 'Mini Relatório - Cenário 5 Versão 1.docx', path: '/evidencias/Cenários/Cenario 5 Grupo 6/Mini Relatório - Cenário 5 Versão 1.docx' },
      { label: 'Mini Relatório - Cenário 5 Versão 2.docx', path: '/evidencias/Cenários/Cenario 5 Grupo 6/Mini Relatório - Cenário 5 Versão 2.docx' },
      { label: 'Mini Relatório - Cenário 5 Versão 3.docx', path: '/evidencias/Cenários/Cenario 5 Grupo 6/Mini Relatório - Cenário 5 Versão 3.docx' }
    ]
  },
  {
    title: 'Cenário 6',
    description: 'Documentos do Cenário 6 Grupo 6',
    files: [
      { label: 'Apêndice A - Cenário 6 Grupo 6.docx', path: '/evidencias/Cenários/Cenário 6 - Grupo 6/Apêndice A - Cenário 6 Grupo 6.docx' },
      { label: 'Mini Relatório - Grupo 6 - Versão 1.docx', path: '/evidencias/Cenários/Cenário 6 - Grupo 6/Mini Relatório - Grupo 6 - Versão 1.docx' },
      { label: 'Mini Relatório - Grupo 6 - Versão 2.docx', path: '/evidencias/Cenários/Cenário 6 - Grupo 6/Mini Relatório - Grupo 6 - Versão 2.docx' },
      { label: 'Mini Relatório - Grupo 6 - Versão 3.docx', path: '/evidencias/Cenários/Cenário 6 - Grupo 6/Mini Relatório - Grupo 6 - Versão 3.docx' }
    ]
  },
  {
    title: 'Cenário 7',
    description: 'Documentos do Cenário 7 Pedro Vale',
    files: [
      { label: 'Mini Relatório - Versão 1.docx', path: '/evidencias/Cenários/Cenário 7 - Pedro Vale/Mini Relatório - Versão 1.docx' },
      { label: 'Mini Relatório - Versão 2.docx', path: '/evidencias/Cenários/Cenário 7 - Pedro Vale/Mini Relatório - Versão 2.docx' },
      { label: 'Mini Relatório - Versão 3.docx', path: '/evidencias/Cenários/Cenário 7 - Pedro Vale/Mini Relatório - Versão 3.docx' }
    ]
  },
  {
    title: 'Cenário 8',
    description: 'Documentos do Cenário 8 Grupo 6',
    files: [
      { label: 'Apêndice A - Cenário 8 Grupo 6.docx', path: '/evidencias/Cenários/Cenário 8 - Grupo 6/Apêndice A - Cenário 8 Grupo 6.docx' },
      { label: 'Mini-Relatório Parte Prática - Versão 1.docx', path: '/evidencias/Cenários/Cenário 8 - Grupo 6/Mini-Relatório Parte Prática - Versão 1.docx' },
      { label: 'Mini-Relatório Parte Prática - Versão 2.docx', path: '/evidencias/Cenários/Cenário 8 - Grupo 6/Mini-Relatório Parte Prática - Versão 2.docx' },
      { label: 'Mini-Relatório Parte Prática - Versão 3.docx', path: '/evidencias/Cenários/Cenário 8 - Grupo 6/Mini-Relatório Parte Prática - Versão 3.docx' }
    ]
  }
];

const Cenarios: React.FC = () => {
  return (
    <div className="details-panel">
      <div>
        <h1>Cenários de Aprendizagem</h1>
        <p className="section-copy" style={{ marginBottom: '24px' }}>
          Lista dos ficheiros disponíveis em <strong>public/evidencias/Cenários</strong>.
        </p>
      </div>

      {scenarios.map((scenario) => (
        <details key={scenario.title} className="scenario-item">
          <summary className="scenario-summary">📁 {scenario.title}</summary>
          <div className="file-item">
            <p style={{ margin: 0, color: '#475569' }}>{scenario.description}</p>
            {scenario.files.map((file) => (
              <a
                key={file.path}
                href={encodeURI(file.path)}
                target="_blank"
                rel="noreferrer"
                className="file-link"
              >
                📄 {file.label}
              </a>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};

export default Cenarios;
