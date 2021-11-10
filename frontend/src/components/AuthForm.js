import React from "react";
import { Link } from 'react-router-dom';
function AuthForm(props) {
    return(
      <section className='authorization'>
        <h1 className="authorization__title">{props.title}</h1>
          <form
          className='authorization__form' 
          onSubmit={props.onSubmit} 
          name={`${props.name}-form`}
          >
            {props.children}
            <button className='authorization__submit' type='submit'>{props.buttonText}</button>
            {props.name === 'register' &&
              <div className="authorization__hint">
                <p className="authorization__hint-text">Уже зарегистрированы?</p>
                <Link to="/sign-in" className="authorization__hint-link">Войти</Link>
              </div>
            }
          </form>
      </section>
    )
}
export default AuthForm