import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

// Importação das páginas
import Inicio from './pages/Inicio';
import Apresentacao from './pages/Apresentacao/Apresentacao';
import Artigo from './pages/Evidencias/Artigo';
import Cenarios from './pages/Evidencias/Cenarios';
import Relatorio from './pages/Relatorio';
import Contactos from './pages/Contactos';
import Percurso from './pages/Apresentacao/Percurso';
import Competencias from './pages/Apresentacao/Competencias';
import Profissional from './pages/Apresentacao/Profissional';
import ObjetivoPortfolio from './pages/PorquePortfolio';

const App: React.FC = () => {
  // A password que vai dar acesso ao site
  const PASSWORD_CORRETA = 'pedrovaleportfolio2026';

  // "Memórias" (states) para controlar o ecrã de login
  const [estaAutenticado, setEstaAutenticado] = useState(false);
  const [passwordInserida, setPasswordInserida] = useState('');
  const [erro, setErro] = useState(false);

  // Função que corre quando carregas no botão "Enter" ou "Desbloquear"
  const verificarPassword = (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar
    
    if (passwordInserida === PASSWORD_CORRETA) {
      setEstaAutenticado(true);
      setErro(false);
    } else {
      setErro(true);
      setPasswordInserida(''); // Limpa o campo se errar
    }
  };

  // SE NÃO ESTIVER AUTENTICADO: Mostra apenas o ecrã de password
  if (!estaAutenticado) {
    return (
      <div style={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#0f172a', /* Fundo escuro */
        padding: '20px' 
      }}>
        
        <div style={{ 
          maxWidth: '450px', 
          width: '100%', 
          backgroundColor: '#1e293b', 
          padding: '40px', 
          borderRadius: '12px', 
          border: '1px solid #334155',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}>
          
          <h2 style={{ 
            color: '#f8fafc', 
            fontFamily: '"Fira Code", monospace', 
            margin: '0 0 8px 0', 
            fontSize: '1.4rem' 
          }}>
            <span style={{ color: '#3b82f6', marginRight: '10px' }}>&gt;_</span>
            Acesso Restrito
          </h2>
          
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '30px' }}>
            Este repositório encontra-se protegido. Insere a chave de acesso para iniciar a compilação do portfólio.
          </p>

          <form onSubmit={verificarPassword}>
            <div style={{ marginBottom: '20px' }}>
              <input 
                type="password" 
                value={passwordInserida}
                onChange={(e) => setPasswordInserida(e.target.value)}
                placeholder="Introduza a password..."
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  backgroundColor: '#0f172a',
                  border: `1px solid ${erro ? '#ef4444' : '#475569'}`,
                  borderRadius: '8px',
                  color: '#f8fafc',
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '1rem',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
                autoFocus
              />
              {erro && (
                <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '8px', fontFamily: '"Fira Code", monospace' }}>
                  [ Error ] Permissão negada. Chave incorreta.
                </p>
              )}
            </div>

            <button 
              type="submit"
              style={{
                width: '100%',
                padding: '14px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontFamily: '"Fira Code", monospace',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              [ Executar Desbloqueio ]
            </button>
          </form>

        </div>
      </div>
    );
  }

  // SE ESTIVER AUTENTICADO: Mostra o site normalmente
  return (
    <Router>
      <div className="app-shell">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/apresentacao/apresentacao" element={<Apresentacao />} />
            <Route path="/apresentacao/percurso" element={<Percurso />} />
            <Route path="/evidencias/artigo" element={<Artigo />} />
            <Route path="/evidencias/cenarios" element={<Cenarios />} />
            <Route path="/relatorio" element={<Relatorio />} />
            <Route path="/contactos" element={<Contactos />} />
            <Route path="/apresentacao/competencias" element={<Competencias />} />
            <Route path="/apresentacao/profissional" element={<Profissional />} />
            <Route path="/porque-portfolio" element={<ObjetivoPortfolio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;