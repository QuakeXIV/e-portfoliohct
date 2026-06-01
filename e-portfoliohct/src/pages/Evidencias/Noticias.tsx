import React from 'react';

interface NewsItem {
  week: string;
  date: string;
  commitHash: string;
  title: string;
  summary: string;
  tags: string[];
}

const newsLogs: NewsItem[] = [
  {
    week: "Semana 1",
    date: "02.03.2026 - 09.03.2026",
    commitHash: "7a2b9f1",
    title: "Novo Pólo de IA para a Sustentabilidade no INESC TEC",
    summary: "O INESC TEC anunciou novos avanços na aplicação de Inteligência Artificial para otimizar as redes energéticas nacionais e prever consumos, marcando um passo vital na transição digital e energética de Portugal.",
    tags: ["Inteligência Artificial", "Sustentabilidade", "INESC TEC"]
  },
  {
    week: "Semana 2",
    date: "09.03.2026 - 16.03.2026",
    commitHash: "3c8e4d2",
    title: "Açores como Hub de Advanced Air Mobility (AAM)",
    summary: "Início de parcerias aeronáuticas vitais para testar a implementação de sistemas de mobilidade aérea avançada (drones e eVTOLs autónomos) nos Açores, destinados à monitorização remota e operações de segurança.",
    tags: ["Aeroespacial", "Drones", "Açores"]
  },
  {
    week: "Semana 3",
    date: "16.03.2026 - 23.03.2026",
    commitHash: "9f1a7b5",
    title: "Tecnologia IoT na Mitigação de Cheias e Secas",
    summary: "Avanços governamentais na estratégia de gestão hídrica, com a aprovação da barragem de Girabolhos e o estudo de sistemas baseados em sensores IoT para a prevenção e resposta a desastres naturais no centro do país.",
    tags: ["IoT", "Prevenção", "Gestão Hídrica"]
  },
  {
    week: "Semana 4",
    date: "06.04.2026 - 13.04.2026",
    commitHash: "5d2c8e4",
    title: "IPMA Integra Machine Learning na Previsão Meteorológica",
    summary: "O Instituto Português do Mar e da Atmosfera reforçou os seus processos analíticos com modelos preditivos baseados em Machine Learning, visando alertar atempadamente a população sobre fenómenos climáticos extremos.",
    tags: ["Machine Learning", "Meteorologia", "IPMA"]
  },
  {
    week: "Semana 5",
    date: "13.04.2026 - 20.04.2026",
    commitHash: "1b9f7a3",
    title: "Inovação Médica: Deteção de Biomarcadores com LLMs",
    summary: "Investigadores apresentaram novas provas de conceito para a deteção precoce de patologias oncológicas recorrendo a Modelos de Linguagem de Grande Escala (LLMs) aplicados à análise de milhares de registos clínicos.",
    tags: ["HealthTech", "LLMs", "Investigação"]
  },
  {
    week: "Semana 6",
    date: "20.04.2026 - 27.04.2026",
    commitHash: "8e4d2c9",
    title: "Estratégia Nacional de Energia Oceânica e Eólica",
    summary: "Publicação de novos dados técnicos que confirmam o enorme potencial do Atlântico português para a expansão de turbinas eólicas offshore de nova geração e eletrificação verde da economia.",
    tags: ["Energias Renováveis", "Offshore", "Transição Verde"]
  },
  {
    week: "Semana 7",
    date: "04.05.2026 - 11.05.2026",
    commitHash: "2c9f1a7",
    title: "Robótica Submarina Portuguesa em Destaque no Sado",
    summary: "Engenheiros e biólogos portugueses testaram com sucesso sistemas de drones submarinos autónomos (AUV) para mapear a biodiversidade marinha na zona da Arrábida de forma totalmente não intrusiva.",
    tags: ["Robótica", "AUV", "Oceanografia"]
  },
  {
    week: "Semana 8",
    date: "11.05.2026 - 18.05.2026",
    commitHash: "e4f5g6h",
    title: "Inauguração do Star Institute em Viseu",
    summary: "O Primeiro-Ministro inaugurou oficialmente o Star Institute, reforçando que a aproximação entre as empresas e as instituições de ensino tecnológico é o verdadeiro motor de desenvolvimento e fixação de talento em Portugal.",
    tags: ["Educação Tecnológica", "Indústria", "Políticas Públicas"]
  }
];

const Noticias: React.FC = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      
      <style>{`
        .news-header {
          text-align: left;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .news-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol-orange {
          color: #f59e0b;
          margin-right: 10px;
        }

        /* Container da Timeline (Estilo Git Log) */
        .timeline-container {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 32px;
          padding-left: 24px;
        }

        /* Linha Vertical Conectora */
        .timeline-container::before {
          content: '';
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 31px; /* Alinhado ao centro da bolinha */
          width: 2px;
          background: #e2e8f0;
          z-index: 0;
        }

        .timeline-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 24px;
          z-index: 1;
        }

        /* Bolinha (Commit node) */
        .timeline-marker {
          width: 16px;
          height: 16px;
          background: #ffffff;
          border: 4px solid #f59e0b;
          border-radius: 50%;
          margin-top: 24px;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.1);
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .timeline-item:hover .timeline-marker {
          transform: scale(1.3);
          border-color: #d97706;
          box-shadow: 0 0 0 6px rgba(245, 158, 11, 0.2);
        }

        /* Cartão de Notícia (Estilo dev-card) */
        .news-card {
          flex: 1;
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          padding: 24px 32px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
          transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
        }

        .timeline-item:hover .news-card {
          border-color: #fcd34d;
          box-shadow: 0 10px 15px -3px rgba(245, 158, 11, 0.08);
          transform: translateX(4px);
        }

        /* Meta Info: Commit, Semana e Data */
        .news-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 16px;
          border-bottom: 1px dashed #e2e8f0;
          padding-bottom: 12px;
        }

        .commit-hash {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #b45309;
          background: #fef3c7;
          padding: 4px 8px;
          border-radius: 6px;
          font-weight: 700;
        }

        .news-week-date {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .week-badge {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.8rem;
          color: #475569;
          font-weight: 800;
          text-transform: uppercase;
        }

        .date-text {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #64748b;
        }

        /* Título e Conteúdo */
        .news-title {
          font-size: 1.3rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 12px 0;
          font-weight: 800;
          line-height: 1.4;
        }

        .news-summary {
          color: var(--text-p, #475569);
          line-height: 1.7;
          font-size: 1rem;
          margin: 0 0 20px 0;
          text-align: justify;
        }

        /* Tags */
        .news-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag-badge {
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #cbd5e1;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: '"Fira Code", monospace', sans-serif;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .timeline-container {
            padding-left: 0;
          }
          .timeline-container::before {
            display: none;
          }
          .timeline-marker {
            display: none;
          }
          .news-card {
            padding: 20px;
          }
          .timeline-item:hover .news-card {
            transform: translateY(-4px);
          }
        }
      `}</style>

      {/* Cabeçalho */}
      <div className="news-header">
        <h1><span className="prompt-symbol-orange">&gt;_</span>git log --oneline ./pt_science_tech</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
          Registo de atualidades e inovações no panorama tecnológico e científico em Portugal durante as 8 semanas de projeto.
        </p>
      </div>

      {/* Timeline de Notícias */}
      <div className="timeline-container">
        {newsLogs.map((log) => (
          <div className="timeline-item" key={log.week}>
            <div className="timeline-marker"></div>
            
            <article className="news-card">
              
              <div className="news-meta">
                <span className="commit-hash">commit {log.commitHash}</span>
                <div className="news-week-date">
                  <span className="week-badge">[{log.week}]</span>
                  <span className="date-text">{log.date}</span>
                </div>
              </div>
              
              <h2 className="news-title">{log.title}</h2>
              <p className="news-summary">{log.summary}</p>
              
              <div className="news-tags">
                {log.tags.map(tag => (
                  <span key={tag} className="tag-badge">#{tag.toLowerCase().replace(/\s+/g, '_')}</span>
                ))}
              </div>

            </article>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Noticias;