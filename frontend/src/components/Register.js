import React from "react";
import AuthForm from "./AuthForm";

function Register(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function editEmail(e) {
    setEmail(e.target.value)
  }
  function editPassword(e) {
    setPassword(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(email, password)
  }
    return(
      <AuthForm 
      onSubmit={handleSubmit}
      name={'register'} 
      title={'Регистрация'} 
      buttonText={"Зарегистрироваться"}>
        <input 
          className='authorization__input' 
          type='email' 
          name='email' 
          placeholder="E-mail" 
          value={email}
          onChange={editEmail}
          required
        />  
        <input 
          className='authorization__input' 
          type='password' 
          name='password' 
          placeholder="Пароль" 
          minLength='6'
          value={password}
          onChange={editPassword}
          required
        />
      </AuthForm>    
    )
}
export default Register