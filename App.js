import React from 'react';

const CadastroFinalizado = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f3e8ff' }}>
      <div style={{ backgroundColor: '#5b21b6', color: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 20px 20px rgba(0, 0, 0, 0.1)', maxWidth: '28rem', width: '100%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>Cadastro finalizado!</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Faça login para acessar o site e se conectar!
        </p>
        <button
          style={{ backgroundColor: 'white', color: '#5b21b6', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontWeight: '600', transition: 'background-color 0.3s', border: 'none', cursor: 'pointer' }}
          onClick={() => console.log('Login clicked')}
        >
          Fazer login
        </button>
      </div>
    </div>
  );
};

export default CadastroFinalizado;
