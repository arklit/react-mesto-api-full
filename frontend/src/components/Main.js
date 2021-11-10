import React from 'react';
import Card from './Card';
import editButton from '../images/editButton.svg';
import addButton from '../images/addButton.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main>
      <section className='profile'>
        <div className='profile__avatar-edit'>
          <button
            type='button'
            onClick={props.onEditAvatar}
            className='profile__avatar-button'
          ></button>
          <img className='profile__avatar' src={currentUser.avatar} alt='аватар' />
        </div>
        <div className='profile__info'>
          <div>
            <h1 className='profile__name'>{currentUser.name}</h1>
            <p className='profile__bio'>{currentUser.about}</p>
          </div>
          <button
            type='button'
            onClick={props.onEditProfile}
            className='profile__edit-button'
          >
            <img className='icon' src={editButton} alt='кнопка изменения' />
          </button>
        </div>
        <button type='button' onClick={props.onAddPlace} className='profile__add-button'>
          <img className='icon' src={addButton} alt='кнопка добавления' />
        </button>
      </section>
      <section className='elements'>
        {props.cards.map((card) => (
          <Card
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
            onCardClick={props.onCardClick}
            card={card}
            key={card._id}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
