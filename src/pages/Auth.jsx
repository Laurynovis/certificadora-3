import React from 'react';
import './auth.css';

function Auth() {
  return (
    <div className="main">
      <div className="cardLogin">
        <h2>Entrar</h2>
        <form>
          <label>Email</label>
          <input type="email" placeholder="Digite seu email" required />

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" required />

          <button type="submit">Entrar</button>
        </form>
      </div>
    
      <div className="line"></div>
    

      <div className="cardRegister">
        <h2>Criar Conta</h2>
        <form>
          <label>Nome</label>
          <input type="text" placeholder="Digite seu nome" required />

          <label>Email</label>
          <input type="email" placeholder="Digite seu email" required />

          <label>Senha</label>
          <input type="password" placeholder="Crie uma senha" required />

          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;