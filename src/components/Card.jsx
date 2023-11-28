import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/api";

export default function Card({ card, onCardImageClick, onDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;

  const [isLiked, setIsLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(card.likes.length);

  useEffect(() => {
    setIsLiked(card.likes.some((item) => currentUser._id === item._id));
  }, [card.likes, currentUser._id]);

  function handleLikeClick() {
    if (isLiked) {
      api
        .removeLike(card._id)
        .then((res) => {
          setIsLiked(false);
          setLikeCounter(res.likes.length);
        })
        .catch((err) => console.error(`Ошибка при снятии лайка ${err}`));
    } else {
      api
        .addLike(card._id)
        .then((res) => {
          setIsLiked(true);
          setLikeCounter(res.likes.length);
        })
        .catch((err) => console.error(`Ошибка при нажатии лайка ${err}`));
    }
  }

  return (
    <article className="gallery__item">
      <div className="gallery__item-wrapper">
        <img
          className="gallery__image"
          alt={card.name}
          src={card.link}
          onClick={() => onCardImageClick({ link: card.link, name: card.name })}
        />
        {isOwn && (
          <button
            className="gallery__delete-button"
            type="button"
            onClick={() => onDelete(card._id)}
          />
        )}
      </div>
      <h2 className="gallery__title">{card.name}</h2>
      <div className="gallery__like-wrapper">
        <button
          className={`gallery__like-button ${
            isLiked ? "gallery__like-button_active" : ""
          }`}
          type="button"
          onClick={handleLikeClick}
        />
        <span className="gallery__like-counter">{likeCounter}</span>
      </div>
    </article>
  );
}
