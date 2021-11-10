function ImagePopup(props) {
  return (
    <div className={`popup popup_type-image" ${props.card ? 'popup_opened' : ''}`}>
      <figure className='popup__figure'>
        <img className='popup__image' src={props.card.link} alt={props.card.name} />
        <button
          type='button'
          onClick={props.onClose}
          className='popup__close-button'
        ></button>
        <figcaption className='popup__image-caption'>{props.card.name}</figcaption>
      </figure>
    </div>
  );
}
export default ImagePopup;
