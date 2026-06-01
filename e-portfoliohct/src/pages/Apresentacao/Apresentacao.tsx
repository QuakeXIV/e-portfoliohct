import React from 'react';
import profilePhoto from '../../assets/FotoTipoPasse_PedroVale.jpg';

const Apresentacao: React.FC = () => {
  return (
    <div>
      <section className="page-hero">
        <span className="eyebrow">Apresentação</span>
        <h1 className="page-title">Conhece o meu percurso e motivações</h1>
        <p className="page-subtitle">
          Neste espaço descrevo a minha formação, a minha visão para o projeto e os objetivos que orientaram este portefólio.
        </p>
      </section>

      <div className="about-section" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
        
        {/* Lado Esquerdo - Conteúdo Principal */}
        <div className="about-content" style={{ flex: '1', minWidth: '60%' }}>
          
          {/* Grelha com os dois primeiros painéis */}
          <div className="section-grid">
            <article className="content-panel">
              <h2>Quem sou</h2>
              <p className="section-copy">Construir soluções digitais que ganham vida nos navegadores e nos smartphones é o desafio que mais me motiva. Atualmente a frequentar a Licenciatura em Engenharia Informática no ISTEC Porto, procuro traduzir a lógica complexa dos algoritmos em aplicações responsivas, rápidas e intuitivas. O meu objetivo passa por desenhar software limpo e escalável, guiando-me sempre pela premissa de que a exigência técnica e a curiosidade inesgotável são a base para criar tecnologia com verdadeiro impacto.</p>
            </article>

            <article className="content-panel">
              <h2>Objetivos Futuros</h2>
              <div className="section-copy" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '14px' }}>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: '#9b9b9b' }}>Especialização:</strong> Aprofundar competências em Desenvolvimento Web e Móvel.
                </p>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: '#9b9b9b' }}>Certificações:</strong> Aprender frameworks modernos, mantendo-me ao corrente das tendências do mercado.
                </p>
                <p style={{ margin: 0 }}>
                  <strong style={{ color: '#9b9b9b' }}>Projetos Reais:</strong> Integrar grandes equipas de desenvolvimento.
                </p>
              </div>
            </article>
          </div>

          {/* NOVO PAINEL - Valores Profissionais (Ocupa a largura total da about-content) */}
          <article className="content-panel" style={{ marginTop: '24px' }}>
            <h2>Valores Profissionais</h2>
            <div className="section-copy" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '14px' }}>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#9b9b9b' }}>Responsabilidade e Qualidade:</strong> Escrever código escalável e de alta qualidade.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#9b9b9b' }}>Segurança:</strong> Implementação de boas práticas de proteção de dados e safe code.
              </p>
              <p style={{ margin: 0 }}>
                <strong style={{ color: '#9b9b9b' }}>Trabalho em Conjunto:</strong> Colaboração, Cooperação e Comunicação.
              </p>
            </div>
          </article>

        </div>

        {/* Lado Direito - Sidebar com o Perfil */}
        <div className="about-sidebar" style={{ width: '320px', flexShrink: '0' }}>
          <div className="personal-card">
            <div className="personal-card-image">
              <img src={profilePhoto} alt="Pedro Vale" className="personal-photo" />
            </div>
            <div className="personal-card-content">
              <h2 className="personal-name">Pedro Vale</h2>
              <p className="personal-course">ENGENHARIA INFORMÁTICA</p>

              <div className="personal-info-group">
                <div className="personal-info-item">
                  <span className="personal-info-label">Instituição:</span>
                  <p className="personal-info-value">ISTEC Porto</p>
                </div>
                
                <div className="personal-info-item">
                  <span className="personal-info-label">Localização:</span>
                  <p className="personal-info-value">Porto, Portugal</p>
                </div>

                <div className="personal-info-item">
                  <span className="personal-info-label">Foco:</span>
                  <p className="personal-info-value">Desenvolvimento Web e Móvel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Apresentacao;