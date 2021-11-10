import PopupWithForm from './PopupWithForm';
import React from 'react';
function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  function editName(e) {
    setName(e.target.value);
  }
  function editLink(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace(name, link);
  }
  return (
    <PopupWithForm
      name={'card'}
      title={'Новое место'}
      isOpen={props.isOpen}
      buttonText={'Создать'}
      onSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <input
        name='title'
        value={name}
        onChange={editName}
        type='text'
        placeholder='Название'
        id='title-input'
        className='popup__text popup__text_card_name popup__input'
        minLength='2'
        maxLength='30'
        required
      />
      <span className='popup__input-error title-input-error'></span>
      <input
        name='link'
        value={link}
        onChange={editLink}
        type='url'
        placeholder='Ссылка на картинку'
        id='url-input'
        className='popup__text popup__text_card_img popup__input'
        required
      />
      <span className='popup__input-error url-input-error'></span>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
