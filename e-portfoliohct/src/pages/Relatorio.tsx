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

        .log-text-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .log-list {
          color: var(--text-p, #475569);
          line-height: 1.8;
          font-size: 1rem;
          margin: 0;
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: justify;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .log-content {
            padding: 24px 20px;
          }
          .log-text, .log-list {
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
            <h2 className="log-heading">Introdução</h2>
            <p className="log-text">
              Este relatório pretende documentar e refletir sobre o período de aprendizagem na unidade curricular de História da Ciência e das Técnicas, lecionada pela Doutora Luísa Orvalho, no 2.º semestre do 1.º ano da Licenciatura em Engenharia Informática, no Instituto Superior de Tecnologias Avançadas do Porto (ISTEC Porto). O objetivo é promover a autoavaliação e a reflexão crítica, para compreender melhor o meu crescimento pessoal e académico.
            </p>
          </div>

          {/* Secção 2 */}
          <div className="log-section">
            <span className="section-tag">02</span>
            <h2 className="log-heading">Objetivos de Aprendizagem</h2>
            <ul className="log-list">
              <li>Identificar os factos significativos e determinantes do percurso do Homem na construção da Ciência e da Técnica em ordem ao estabelecimento das relações entre esses fatos, à descoberta das linhas balizadoras do progresso técnico, científico e tecnológico, à avaliação das respetivas fases da evolução e à compreensão do emaranhamento técnico-científico do seu estádio atual;</li>
              <li>Desenvolver o interesse pela investigação e capacidade para acompanhar com atitudes de autonomia e cooperação, os fatos quotidianos relacionados com a Ciência – Tecnologia – Sociedade (CT&S);</li>
              <li>Discutir temas e conceitos de CT&S inseridos em contextos reais e sociais, dando sentido funcional aos conceitos-chave aprendidos do ponto de vista científico-tecnológico e socio-humanista;</li>
              <li>Demonstrar interesse e curiosidade pela investigação e divulgação científica, pela cultura, conhecimento e pelos temas que estão na ordem do dia relativamente ao “Conhecimento e Inovação”;</li>
              <li>Evidenciar competências interpretativas, comunicacionais, expressivas, reflexivas, de juízo crítico e criativo que facilitem a compreensão da sociedade VUCA (Volátil, Incerta, Complexa e Ambígua) contemporânea, a perspetiva crítica da Ciência e da Tecnologia, a Cidadania ativa da intervenção reflexiva sobre as implicações éticas da Ciência, os limites da Ciência, a digitalização no mercado laboral e o recrutamento dos Recursos Humanos;</li>
              <li>Trabalhar as temáticas de HCT de forma interdisciplinar com as diferentes UC do plano de estudos, e especialmente, com a UC de Projeto, relativamente à fundamentação teórica e revisão do estado da arte dos projetos (académicos, empresariais e de estágio) e dos artigos científicos;</li>
              <li>Manifestar segurança e espírito independente, mobilizando criticamente saberes e competências adquiridas para escrever mini artigos científicos e submetê-los a revistas com revisão de pares (como por ex: Revista Kriativ-Tech);</li>
              <li>Apresentar propostas de comunicações e posters a congressos nacionais e internacionais, sobre temáticas relacionadas com o desenvolvimento tecnocientífico sustentável e inteligente que contribuam para uma sociedade mais inclusiva, digital, humanista e capacitante;</li>
              <li>Discutir ciência em contexto da Sociedade com apresentação de notícias sobre CT&S;</li>
              <li>Acompanhar os avanços da tecnologia da IA, participar ativa e construtivamente no diálogo público e académico, fazendo uso eficaz das várias ferramentas disponíveis atualmente.</li>
            </ul>
          </div>

          {/* Secção 3 */}
          <div className="log-section">
            <span className="section-tag">03</span>
            <h2 className="log-heading">Método de Ensino</h2>
            <div className="log-text-group">
              <p className="log-text">
                Durante esta unidade curricular, foram resolvidas questões de aula disponibilizadas pela docente através da plataforma Moodle. Estas atividades serviram como instrumentos de avaliação formativa e proporcionaram momentos de discussão e aprendizagem, contribuindo para o desenvolvimento do raciocínio crítico e para o aprofundamento dos temas abordados. O material de apoio fornecido pela docente foi essencial para a realização destas tarefas e para incentivar a partilha de conhecimentos e experiências.
              </p>
              <p className="log-text">
                No início de cada aula, procedeu-se também à resolução de questões relacionadas com os temas em estudo da aula anterior, como as grandes etapas do progresso da Humanidade, a definição de ciência, técnica e tecnologia segundo João Caraça, a evolução do conhecimento segundo Karl Popper, Richard Feynman e Thomas Kuhn, a distinção entre ciência e pseudociência, a missão e os eixos de atuação da Agência Nacional para a Cultura Científica e Tecnológica, e ainda aspetos culturais relacionados com Rómulo de Carvalho e o Dia Nacional da Cultura Científica.
              </p>
              <p className="log-text">
                Outro ponto marcante foi a elaboração de um artigo científico em grupo, cujo tema foi "Ciência e Desenvolvimento Tecnológico: As Grandes Etapas do Progresso Técnico segundo Alvin Toffler e Klaus Schwab". Beneficiei do acompanhamento da docente, cujas orientações foram fundamentais para o desenvolvimento do trabalho e a consolidação do conhecimento adquirido. 
              </p>
              <p className="log-text">
                Por fim, destaca-se a prática de apresentar notícias relacionadas com Ciência, Tecnologia e Sociedade (CT&S). Esta atividade promoveu a ligação entre os conceitos teóricos e as suas aplicações práticas, além de permitir acompanhar os avanços mais recentes nestas áreas. No conjunto, estes métodos de ensino criaram um ambiente dinâmico e colaborativo, fortalecendo a autonomia, o espírito crítico e a capacidade de relacionar o conhecimento científico com as questões emergentes da sociedade.
              </p>
            </div>
          </div>

          {/* Secção 4 */}
          <div className="log-section">
            <span className="section-tag">04</span>
            <h2 className="log-heading">Reflexão Pessoal</h2>
            <div className="log-text-group">
              <p className="log-text">
                A experiência de aprendizagem nesta unidade curricular foi, sem dúvida, enriquecedora e desafiadora. As atividades desenvolvidas no início de cada aula, como a resolução de questões relacionadas com as matérias anteriormente estudadas, contribuíram significativamente para consolidar o meu conhecimento consecutivamente. Além disso, as questões e investigações adicionais propostas pela docente no Moodle serviram como instrumentos de avaliação formativa e foram fundamentais para o desenvolvimento do raciocínio crítico e da capacidade de síntese e argumentação.
              </p>
              <p className="log-text">
                A elaboração do artigo científico em grupo foi, inegavelmente, um dos pontos altos desta unidade curricular. O tema escolhido, "Ciência e Desenvolvimento Tecnológico: As Grandes Etapas do Progresso Técnico segundo Alvin Toffler e Klaus Schwab", proporcionou-me uma oportunidade única de aprofundar um tema de grande atualidade e relevância. A orientação e acompanhamento da docente foram determinantes para o sucesso deste trabalho, promovendo uma aprendizagem contínua e rigorosa.
              </p>
              <p className="log-text">
                A prática de trazer notícias relacionadas com Ciência, Tecnologia e Sociedade (CT&S) para a sala de aula também teve um impacto muito positivo na minha aprendizagem. Esta atividade permitiu-me estabelecer pontes entre o conhecimento teórico e o contexto real, ampliando a minha perceção sobre a importância e aplicabilidade das temáticas estudadas. Além disso, incentivou a reflexão crítica e a capacidade de relacionar as inovações tecnológicas com os desafios globais.
              </p>
              <p className="log-text">
                De um modo geral, considero que atingi os objetivos de aprendizagem definidos para esta unidade curricular. A abordagem adotada permitiu-me desenvolver competências essenciais, como a autonomia, a resiliência e a colaboração, além de aprofundar o meu espírito crítico e a curiosidade científica. Estou convicto de que as competências adquiridas serão fundamentais para a minha formação académica e para a minha futura atuação profissional, especialmente em contextos que exigem capacidade de adaptação, pensamento crítico e integração de conhecimentos multidisciplinares.
              </p>
            </div>
          </div>

          {/* Secção 5 */}
          <div className="log-section">
            <span className="section-tag">05</span>
            <h2 className="log-heading">Conclusão</h2>
            <div className="log-text-group">
              <p className="log-text">
                Concluí que esta unidade curricular contribuiu de forma decisiva para o meu crescimento pessoal e académico. As diversas atividades e o método de ensino permitiram-me aprimorar significativamente o meu pensamento crítico, ao refletir sobre vários temas e interligar conceitos teóricos com aplicações práticas.
              </p>
              <p className="log-text">
                Além disso, o trabalho colaborativo e o constante feedback ajudaram-me a desenvolver a capacidade de análise e resolução de problemas de forma criativa e autónoma. Este percurso permitiu-me reforçar competências fundamentais como a autonomia, a resiliência e a cooperação, preparando-me para enfrentar desafios futuros tanto nos campos da Engenharia Informática, do desenvolvimento web e móvel, como noutros contextos profissionais e pessoais. 
              </p>
              <p className="log-text">
                Em suma, considero que o meu desempenho foi "Bom", uma vez que alcancei os objetivos propostos de forma sólida e consistente, cumprindo as expectativas. No entanto, reconheço que existe sempre margem para progressão, acreditando que poderia adotar uma abordagem ainda mais proativa em determinados momentos para continuar a fortalecer as minhas capacidades de comunicação e intervenção em contexto académico e profissional.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Relatorio;