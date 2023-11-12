export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup image-popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__image-wrapper">
        <button className="popup__close-btn" type="button" onClick={onClose}/>
        <figure className="popup__image-container">
          <img className="popup__image" alt={card.name || '#'} src={card.link || '#'} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  )
}