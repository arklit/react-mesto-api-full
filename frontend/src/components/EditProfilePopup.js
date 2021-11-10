import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';
function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  function editName(e) {
    setName(e.target.value);
  }
  function editDescription(e) {
    setDescription(e.target.value);
  }
  return (
    <PopupWithForm
      name={'profile'}
      title={'Редактировать профиль'}
      isOpen={props.isOpen}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <input
        name='name'
        onChange={editName}
        value={name}
        type='text'
        placeholder='Имя'
        id='name-input'
        className='popup__text popup__text_type_name popup__input'
        minLength='2'
        maxLength='40'
        required
      />
      <span className='popup__input-error name-input-error'></span>
      <input
        name='about'
        onChange={editDescription}
        value={description}
        type='text'
        placeholder='О себе'
        id='bio-input'
        className='popup__text popup__text_type_bio popup__input'
        minLength='2'
        maxLength='200'
        required
      />
      <span className='popup__input-error bio-input-error'></span>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
