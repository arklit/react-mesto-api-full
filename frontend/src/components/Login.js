import React from "react";
import AuthForm from "./AuthForm";

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function editEmail(e) {
    setEmail(e.target.value);
  }
  function editPassword(e) {
    setPassword(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email, password)
  }
    return(
      <AuthForm
      name={'login'} 
      title={'Вход'} 
      buttonText={"Войти"}
      onSubmit={handleSubmit}>
        <input 
          className='authorization__input' 
          type='email' 
          name='email'
          value={email}
          onChange={editEmail}
          placeholder="E-mail" 
          required
        />
        <input 
          className='authorization__input' 
          type='password' 
          name='password'
          value={password}
          onChange={editPassword}
          placeholder="Пароль" 
          minLength='6'
          required
        />
      </AuthForm>
    )
}
export default Login
