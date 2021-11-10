import React from "react";
import success from '../images/success.svg';
import fail from '../images/fail.svg';

function InfoTooltip(props) {
  return(
    <div className={`popup popup_type-info ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <button type='button' className='popup__close-button' onClick={props.onClose}></button>
          <div className='popup__form'>
            <img className='popup__tip'
              src={props.isSuccess ? success : fail}
              alt={props.isSuccess ? 'Успешно' : 'Ошибка'}
              />
            <h2 className='popup__tip-text'>
              {props.isSuccess 
                ? "Вы успешно зарегистрировались!" 
                : "Что-то пошло не так! Попробуйте ещё раз."
              }
            </h2>
          </div>
        </div>
      </div>
    );
}
export default InfoTooltip