import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner === currentUser._id;
  const cardDeleteButtonClassName = `element__trash ${
    isOwn ? 'element__trash_active' : 'element__trash_hidden'
  }`;
  const isLiked = props.card.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? 'element__like_active' : ''
  }`;
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
  return (
    <div className='element'>
      <button
        type='button'
        className={cardDeleteButtonClassName}
        onClick={handleDeleteClick}
      ></button>
      <img
        className='element__photo'
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name}
      />
      <div className='element__discription'>
        <h2 className='element__name'>{props.card.name}</h2>
        <div className='element__like-container'>
          <button
            type='button'
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <span className='element__like-quantity'>{props.card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}
export default Card;
