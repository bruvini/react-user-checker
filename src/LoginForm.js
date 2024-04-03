import './LoginForm.css';
import React, { Component } from 'react';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  validarAcesso = () => {
    const { email, senha } = this.state;
    if (email === 'b.vinicius@pucpr.edu.br' && senha === '123456') {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  }

  render() {
    return (
      <div className='Formulario'>
        <h1>Login</h1>
        <div>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={this.state.senha}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button onClick={this.validarAcesso}>Acessar</button>
        </div>
        {this.state.mensagem && <h3>{this.state.mensagem}</h3>}
      </div>
    );
  }
}

export default LoginForm;