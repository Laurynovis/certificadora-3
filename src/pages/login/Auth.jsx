import Speaker from '../../assets/images/woman_speaker.png';
import styles from "./styles.module.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha: password })
      });
      const data = await res.json();
      localStorage.setItem('userId', data?.user?.id);
      localStorage.setItem('userType', data?.user?.tipo_usuario);
      
      if (!res.ok) {
        alert(data.error || 'Erro no login');
        return;
      }

      alert(`Bem-vindo, ${data.user.nome}!`);
      navigate('/home');
    } catch (err) {
      alert('Erro ao conectar com a API');
      console.error(err);
    }
  };

  const handleRegister = async (name, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: name, email, senha: password, tipo_usuario: 'comum' })
      });
      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Erro no cadastro');
        return;
      }

      alert(`Usuário ${data.user.nome} cadastrado com sucesso! Agora faça login.`);
      setIsLogin(true);
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      alert('Erro ao conectar com a API');
      console.error(err);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        <div className={styles.loginBanner}>
          <img src={Speaker} alt="Logo" style={{ width: 500, height: 500 }} />
          <h2 style={{ margin: 0 }}>Oratore</h2>
          <p style={{ margin: 0 }}>Seu sistema de gestão de palestras</p>
        </div>

        <div className={styles.loginEntrance}>
          <div className={styles.loginEntranceSelectedContainer}>
            <h3
              onClick={() => setIsLogin(true)}
              className={`${styles.buttonAuth} ${isLogin ? styles.active : ''}`}
            >
              Login
            </h3>
            <h3
              onClick={() => setIsLogin(false)}
              className={`${styles.buttonAuth} ${!isLogin ? styles.active : ''}`}
            >
              Cadastro
            </h3>
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              marginTop: 15
            }}
          >
            {isLogin ? (
              <div className={styles.loginSignIn}>
                <h1 className={styles.loginSignIn_title}>Login</h1>
                <div className={styles.loginSignIn_Input}>
                  <p>E-mail</p>
                  <input
                    style={{ padding: 5 }}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                  />
                </div>
                <div className={styles.loginSignIn_Input}>
                  <p>Senha</p>
                  <input
                    style={{ padding: 5 }}
                    placeholder="Senha"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button
                  className={styles.loginSignIn_button}
                  onClick={() => handleLogin(email, password)}
                >
                  Entrar
                </button>
              </div>
            ) : (
              <div className={styles.loginSignIn}>
                <h1 className={styles.loginSignIn_title}>Cadastro</h1>
                <div className={styles.loginSignIn_Input}>
                  <p>Nome</p>
                  <input
                    style={{ padding: 5 }}
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className={styles.loginSignIn_Input}>
                  <p>E-mail</p>
                  <input
                    style={{ padding: 5 }}
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                  />
                </div>
                <div className={styles.loginSignIn_Input}>
                  <p>Senha</p>
                  <input
                    style={{ padding: 5 }}
                    placeholder="Senha"
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className={styles.loginSignIn_Input}>
                  <p>Confirmar Senha</p>
                  <input
                    style={{ padding: 5 }}
                    placeholder="Confirmar Senha"
                    type="password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                </div>
                <button
                  className={styles.loginSignIn_button}
                  onClick={() => handleRegister(name, email, password, confirmPassword)}
                >
                  Cadastrar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
