function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}
    >
      <div className='popup__container'>
        <button
          type='button'
          className='popup__close-button'
          onClick={props.onClose}
        ></button>
        <h2 className='popup__form-title'>{props.title}</h2>
        <form
          name={`${props.name}-form`}
          onSubmit={props.onSubmit}
          className='popup__form'
        >
          {props.children}
          <button type='submit' className='popup__submit'>
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
