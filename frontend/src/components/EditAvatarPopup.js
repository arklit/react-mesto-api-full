import PopupWithForm from './PopupWithForm';
import React from 'react';
function EditAvatarPopup(props) {
  const avatarRef = React.useRef(null);
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }
  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      isOpen={props.isOpen}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
      onClose={props.onClose}
    >
      <input
        name='link'
        type='url'
        placeholder='Ссылка на аватар'
        id='avatar-input'
        className='popup__text popup__text_avatar popup__input'
        minLength='2'
        required
        ref={avatarRef}
      />
      <span className='popup__input-error avatar-input-error'></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
