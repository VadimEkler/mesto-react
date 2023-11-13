export default function Card({ card, onCardImageClick }) {
  return (
    <article className="gallery__item">
      <div className="gallery__item-wrapper">
        <img
          className="gallery__image"
          alt={card.name}
          src={card.link}
          onClick={() => onCardImageClick({ link: card.link, name: card.name })}
        />
        <button className="gallery__delete-button" type="button" />
      </div>
      <h2 className="gallery__title">${card.name}</h2>
      <div className="gallery__like-wrapper">
        <button className="gallery__like-button" type="button" />
        <span className="gallery__like-counter" />
      </div>
    </article>
  );
}
