import React from 'react';

interface NewsItem {
  week: string;
  date: string;
  commitHash: string;
  title: string;
  summary: string;
  tags: string[];
  sourceUrl: string;
}

const newsLogs: NewsItem[] = [
  {
    week: "Semana 1",
    date: "02.03.2026 - 09.03.2026",
    commitHash: "7a2b9f1",
    title: "O Regresso do 'The Next Big Idea': Inovação e Startups em Portugal",
    summary: "O programa tecnológico The Next Big Idea regressou à SIC Notícias, focando-se no empreendedorismo e disponibilizando a mais completa base de dados de startups e incubadoras do país para mostrar quem está a redefinir a criação de valor em Portugal.",
    tags: ["Startups", "Inovação", "Media"],
    sourceUrl: "https://24noticias.sapo.pt/tecnologia/artigos/the-next-big-idea-de-regresso-a-sic-noticias-este-sabado"
  },
  {
    week: "Semana 2",
    date: "09.03.2026 - 16.03.2026",
    commitHash: "3c8e4d2",
    title: "FCT Aloca Financiamento para Novos Projetos de I&D",
    summary: "A Fundação para a Ciência e a Tecnologia (FCT) encerrou o processo do Concurso de Projetos I&D em todos os Domínios Científicos, canalizando verbas essenciais para Investigação e Desenvolvimento Tecnológico (IC&DT) visando fortalecer o avanço científico nacional.",
    tags: ["Investigação", "Ciência", "FCT"],
    sourceUrl: "https://www.fct.pt/concursos/concurso-de-projetos-i-d-em-todos-os-dominios-cientificos-2025"
  },
  {
    week: "Semana 3",
    date: "16.03.2026 - 23.03.2026",
    commitHash: "9f1a7b5",
    title: "Novo Centro de Tecnologia e Inovação no Tâmega e Sousa",
    summary: "Foi formalizada a criação de um novo polo industrial e tecnológico numa antiga Fábrica da Moagem. O projeto junta 18 entidades de peso, incluindo o INESC TEC e o Politécnico do Porto, para acelerar as áreas de Inteligência Artificial e Ciência de Dados.",
    tags: ["Polo Industrial", "INESC TEC", "Dados"],
    sourceUrl: "https://valsousatv.sapo.pt/2026/04/02/centro-de-tecnologia-e-inovacao-vai-transformar-antiga-fabrica-da-moagem-em-polo-industrial-de-referencia-no-tamega-e-sousa/"
  },
  {
    week: "Semana 4",
    date: "06.04.2026 - 13.04.2026",
    commitHash: "5d2c8e4",
    title: "A Transformação das Empresas com IA e Serviços Geridos",
    summary: "O Jornal Económico promoveu um debate profundo no 'Dito ao Ouvido' sobre a necessidade de humanizar a Inteligência Artificial, sublinhando que aproveitar o talento tecnológico nacional com as devidas soft skills é crítico para um futuro mais sustentável.",
    tags: ["Inteligência Artificial", "Economia", "Empresas"],
    sourceUrl: "https://jornaleconomico.sapo.pt/noticias/inovacao-e-inteligencia-artificial-como-a-tecnologia-esta-a-transformar-empresas-e-pessoas/"
  },
  {
    week: "Semana 5",
    date: "13.04.2026 - 20.04.2026",
    commitHash: "1b9f7a3",
    title: "A Democratização da Tecnologia em 30 Anos",
    summary: "Uma análise retrospectiva e visionária sobre como Portugal saltou de um país de baixa digitalização para uma sociedade hiperconectada, com as grandes marcas tecnológicas a debaterem o desafio de reduzir o fosso entre inovação de ponta e utilidade diária.",
    tags: ["Sociedade", "Digitalização", "Consumo"],
    sourceUrl: "https://eco.sapo.pt/opiniao/de-luxo-a-essencial-como-a-tecnologia-se-democratizou-em-portugal/"
  },
  {
    week: "Semana 6",
    date: "20.04.2026 - 27.04.2026",
    commitHash: "8e4d2c9",
    title: "Drones e Mobilidade Aérea Avançada no Ciência Viva",
    summary: "Nos dias 22 e 23 de abril, Figueira de Castelo Rodrigo acolheu o Encontro da Rede de Centros Ciência Viva com foco prático no uso de tecnologias aéreas, nomeadamente drones, como apoio crítico em cenários de proteção civil, saúde e logística.",
    tags: ["Robótica", "Educação", "Drones"],
    sourceUrl: "https://turismodocentro.pt/evento/encontro-nacional-da-rede-de-centros-de-ciencia-viva/"
  },
  {
    week: "Semana 7",
    date: "04.05.2026 - 11.05.2026",
    commitHash: "2c9f1a7",
    title: "A Velocidade Exponencial da Disrupção Tecnológica",
    summary: "Num artigo de opinião impactante no Observador, debate-se a falha da classe política perante o avanço da computação: a IA avança a ritmos diários, enquanto a regulação tecnológica demora anos a aprovar diretrizes básicas.",
    tags: ["Regulação", "Opinião", "Estado"],
    sourceUrl: "https://observador.pt/opiniao/a-grande-disrupcao-nao-e-a-tecnologia-e-a-velocidade/"
  },
  {
    week: "Semana 8",
    date: "11.05.2026 - 18.05.2026",
    commitHash: "e4f5g6h",
    title: "Portugal Smart Cities Summit na FIL",
    summary: "Lisboa acolhe, entre 12 e 14 de maio de 2026, o maior evento dedicado às cidades do futuro. Especialistas em IoT, Cibersegurança, Smart Buildings e Redes de Comunicação encontram-se para moldar o paradigma das cidades inteligentes em Portugal.",
    tags: ["Smart Cities", "IoT", "Cibersegurança"],
    sourceUrl: "https://portugalsmartcities.fil.pt/"
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
          left: 31px;
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
          margin: 0;
          text-align: justify;
        }

        /* Rodapé do Cartão: Tags + Link da Fonte */
        .news-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px dashed #e2e8f0;
        }

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

        .news-link {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.85rem;
          color: #3b82f6;
          text-decoration: none;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, transform 0.2s ease;
          background: rgba(59, 130, 246, 0.1);
          padding: 6px 12px;
          border-radius: 6px;
        }

        .news-link:hover {
          color: #ffffff;
          background: #3b82f6;
          transform: translateX(4px);
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
          .news-footer {
            flex-direction: column;
            align-items: flex-start;
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
              
              <div className="news-footer">
                <div className="news-tags">
                  {log.tags.map(tag => (
                    <span key={tag} className="tag-badge">#{tag.toLowerCase().replace(/\s+/g, '_')}</span>
                  ))}
                </div>
                
                <a href={log.sourceUrl} target="_blank" rel="noreferrer" className="news-link">
                  [ Ler Fonte ] <span>→</span>
                </a>
              </div>

            </article>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Noticias;