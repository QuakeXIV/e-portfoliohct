import React from 'react';

const Profissional: React.FC = () => {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>

            {/* CSS Embutido para o Layout Tech / Timeline */}
            <style>{`
        .work-header {
          text-align: left;
          margin-bottom: 60px;
          padding-bottom: 20px;
          border-bottom: 1px dashed var(--border, #cbd5e1);
        }

        .work-header h1 {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          color: var(--text-h, #0f172a);
          margin: 0 0 10px 0;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .prompt-symbol {
          color: #10b981; /* Verde para diferenciar do azul das competências */
          margin-right: 10px;
        }

        /* Linha do tempo e Animações */
        @keyframes pulseGlowGreen {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        .tech-timeline {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tech-step {
          display: flex;
          position: relative;
          min-height: 250px;
        }

        .tech-step:not(:last-child)::after {
          content: '';
          position: absolute;
          top: 50px;
          bottom: -50px;
          left: 170px;
          width: 2px;
          background-image: linear-gradient(to bottom, #10b981 50%, transparent 50%);
          background-size: 2px 14px;
          z-index: 0;
        }

        /* Coluna das Datas */
        .step-time {
          width: 150px;
          padding-top: 15px;
          text-align: right;
          padding-right: 40px;
          position: relative;
        }

        .date-badge-tech {
          display: inline-block;
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 0.8rem;
          color: #10b981;
          background: rgba(16, 185, 129, 0.1);
          padding: 6px 10px;
          border-radius: 6px;
          border: 1px solid rgba(16, 185, 129, 0.2);
          text-transform: uppercase;
          font-weight: 700;
          text-align: right;
        }

        /* Ponto de Ligação */
        .step-dot {
          position: absolute;
          right: -9px;
          top: 22px;
          width: 16px;
          height: 16px;
          background: #10b981;
          border-radius: 50%;
          z-index: 2;
          border: 3px solid var(--bg-app, #f8fafc);
          animation: pulseGlowGreen 2.5s infinite;
        }

        /* Cartão de Conteúdo */
        .step-content {
          flex: 1;
          padding-left: 50px;
          padding-bottom: 60px;
        }

        .step-card {
          background: var(--surface, #ffffff);
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 0 24px 24px 24px;
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .step-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: #10b981;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .step-card:hover {
          transform: translateX(10px);
          border-color: #6ee7b7;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .step-card:hover::before {
          opacity: 1;
        }

        .job-title {
          font-family: '"Fira Code", monospace', sans-serif;
          font-size: 1.4rem;
          color: var(--text-h, #0f172a);
          margin: 0 0 8px 0;
          font-weight: 700;
        }

        .company-name {
          display: inline-block;
          color: #475569;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .responsibilities-header {
          font-size: 0.8rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          display: block;
        }

        .responsibilities-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .responsibilities-list li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          color: var(--text-p, #475569);
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .responsibilities-list li::before {
          content: '>';
          position: absolute;
          left: 0;
          top: 0;
          color: #10b981;
          font-family: '"Fira Code", monospace', sans-serif;
          font-weight: bold;
        }

        /* Responsivo */
        @media (max-width: 768px) {
          .tech-step {
            flex-direction: column;
          }
          .step-time {
            text-align: left;
            padding-right: 0;
            padding-bottom: 20px;
            padding-left: 30px;
            width: 100%;
          }
          .step-dot {
            left: 0;
            top: 26px;
          }
          .tech-step:not(:last-child)::after {
            left: 7px;
            top: 40px;
            bottom: -20px;
          }
          .step-content {
            padding-left: 30px;
            padding-bottom: 40px;
          }
          .step-card {
            border-radius: 16px;
            padding: 24px;
          }
        }
      `}</style>

            <div className="work-header">
                <h1><span className="prompt-symbol">~</span>./history --work</h1>
                <p style={{ color: '#64748b', fontSize: '1.1rem', margin: 0 }}>
                    Histórico de emprego, estágios e projetos profissionais na área.
                </p>
            </div>

            <div className="tech-timeline">

                {/* CARGO 1 */}
                <div className="tech-step">
                    <div className="step-time">
                        <span className="date-badge-tech">MAR 2025<br />JUL 2025</span>
                        <div className="step-dot"></div>
                    </div>
                    <div className="step-content">
                        <div className="step-card">
                            <h2 className="job-title">Estágio Curricular em Native Mobile Development</h2>
                            <div className="company-name">CESAE Digital</div>

                            <span className="responsibilities-header">Responsabilidades & Conquistas</span>
                            <ul className="responsibilities-list">
                                <li>Desenvolvimento integral de aplicações móveis multiplataforma (iOS e Android) a partir do zero, utilizando o ecossistema Flutter e a linguagem Dart.</li>
                                <li>Integração avançada com serviços Firebase, incluindo Authentication, Cloud Firestore para base de dados em tempo real, Cloud Storage e envio de Push Notifications.</li>
                                <li>Implementação de arquiteturas de gestão de estado (como BLoC ou Provider) e criação de interfaces responsivas e otimizadas com foco numa excelente experiência de utilizador (UX/UI).</li>
                                <li>Gestão completa do processo de *deployment*, incluindo configuração de pipelines de CI/CD para testes automatizados e submissão final na Apple App Store e Google Play Store.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CARGO 2 */}
                <div className="tech-step">
                    <div className="step-time">
                        <span className="date-badge-tech">JAN 2023<br />ABR 2023</span>
                        <div className="step-dot" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <div className="step-content">
                        <div className="step-card">
                            <h2 className="job-title">Estágio Curricular em Marketing, SEO e Gestão de CRM</h2>
                            <div className="company-name">Covet Group - Essential Home, DelightFULL e MidCentury</div>

                            <span className="responsibilities-header">Responsabilidades & Conquistas</span>
                            <ul className="responsibilities-list">
                                <li>Gestão e administração de plataformas CRM para mapeamento detalhado da jornada do consumidor e automação de processos de vendas e retenção.</li>
                                <li>Implementação de estratégias de <i>target locking</i>, garantindo uma segmentação precisa do público-alvo para a criação de campanhas hiperdirecionadas e otimização do orçamento de marketing.</li>
                                <li>Definição e execução de planos de Marketing Digital, com forte foco na auditoria e otimização de SEO (On-page e Off-page) para alavancar o posicionamento orgânico nos motores de busca.</li>
                                <li>Monitorização contínua de KPIs e análise de métricas de tráfego, identificando oportunidades de melhoria (A/B testing) para maximizar a taxa de conversão e o ROI das campanhas.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CARGO 3 */}
                <div className="tech-step">
                    <div className="step-time">
                        <span className="date-badge-tech">JAN 2022<br />ABR 2022</span>
                        <div className="step-dot" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <div className="step-content">
                        <div className="step-card">
                            <h2 className="job-title">Estágio Curricular em WordPress e Shopify</h2>
                            <div className="company-name">Escolha Digital Lda.</div>

                            <span className="responsibilities-header">Responsabilidades & Conquistas</span>
                            <ul className="responsibilities-list">
                               <li>Conceção, desenvolvimento e gestão de websites institucionais e plataformas de e-commerce de alto desempenho, utilizando nativamente WordPress (WooCommerce) e Shopify.</li>
<li>Personalização avançada de temas e integração de plugins/apps para expansão de funcionalidades, garantindo interfaces responsivas e uma experiência de navegação (UX) fluida e intuitiva.</li>
<li>Administração contínua do *backoffice*, incluindo a gestão estruturada de catálogos de produtos, controlo de inventário, processamento de encomendas e automação de e-mails transacionais.</li>
<li>Otimização técnica contínua (SEO On-page e melhoria de PageSpeed) e integração de ferramentas de *analytics* para mapear o funil de conversão, reduzir o abandono de carrinho e maximizar as vendas.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profissional;