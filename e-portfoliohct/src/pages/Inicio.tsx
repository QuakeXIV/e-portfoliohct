import React from 'react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/FotoTipoPasse_PedroVale.jpg';

const Inicio: React.FC = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-background" />
        <div className="hero-content">
          <div className="hero-panel">
            <div className="hero-text">
              <span className="hero-badge">E-PORTFÓLIO ACADÉMICO</span>
              <h1 className="hero-name">Pedro Vale</h1>
              <p className="hero-bio">
                Futuro Engenheiro Informático em formação no ISTEC Porto. Movido pela curiosidade e pela resolução de problemas complexos, utilizo este espaço digital para partilhar a minha evolução técnica, os desafios superados e os projetos desenvolvidos.
              </p>
              <div className="hero-actions">
                <Link to="/evidencias/cenarios" className="btn btn-primary">
                  Explorar Cenários
                </Link>
                <Link to="/apresentacao" className="btn btn-secondary">
                  Meu Percurso
                </Link>
              </div>
            </div>

            <div className="hero-image">
              <img src={profilePhoto} alt="Pedro Vale" className="profile-photo" />
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-framework">
        <h2 className="framework-title">Enquadramento do Portfólio</h2>
        <p className="framework-subtitle">O objetivo e importância desta plataforma no desenvolvimento académico.</p>
        <div className="framework-divider"></div>

        <div className="framework-content">
          <p className="framework-text">
            Este E-Portfólio atua como o log central da minha evolução académica em Engenharia Informática. Aqui, os conceitos teóricos ganham forma através de evidências práticas e cenários de estudo, refletindo a sua aplicação direta na resolução de problemas concretos.
          </p>
          <p className="framework-text">
            Funciona, também, como um mecanismo contínuo de autoavaliação e calibração de objetivos profissionais. Ao registar cada etapa e ferramenta dominada, construo uma fundação sólida que alinha o meu conhecimento com as elevadas exigências e ritmo do setor tecnológico atual.
          </p>
        </div>
      </section>

      <section className="content-structure">
        <h2 className="structure-title">Jornada Portfólio</h2>
        <p className="structure-subtitle">Três pilares que estruturam esta plataforma académica.</p>

        <div className="journey-container">
          <div className="journey-line"></div>
          
          <div className="journey-step left">
            <Link to="/apresentacao" className="journey-card">
              <div className="step-marker">01</div>
              <div className="card-icon">👤</div>
              <h3 className="card-title">Apresentação</h3>
              <p className="card-desc">Meu percurso académico, competências técnicas e profissionais desenvolvidas.</p>
              <span className="journey-cta">Explorar →</span>
            </Link>
          </div>

          <div className="journey-step center">
            <Link to="/evidencias/cenarios" className="journey-card featured">
              <div className="step-marker">02</div>
              <div className="card-icon">📋</div>
              <h3 className="card-title">Evidências</h3>
              <p className="card-desc">Projetos práticos, cenários reais resolvidos com documentação técnica e artigos de investigação.</p>
              <span className="journey-cta">Consultar →</span>
            </Link>
          </div>

          <div className="journey-step right">
            <Link to="/relatorio" className="journey-card">
              <div className="step-marker">03</div>
              <div className="card-icon">💭</div>
              <h3 className="card-title">Relatório</h3>
              <p className="card-desc">Reflexões detalhadas sobre aprendizagem, desafios superados e crescimento profissional.</p>
              <span className="journey-cta">Ler →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;