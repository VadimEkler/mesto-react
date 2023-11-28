import Card from "./Card.jsx";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext.js";

export default function Main({
  onEditProfile,
  onAddCard,
  onEditAvatar,
  onDelete,
  onCardImageClick,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__card">
          <button
            type="button"
            className="profile__portrait-edit-btn"
            onClick={onEditAvatar}
          >
            <img
              className="profile__portrait"
              src={currentUser.avatar || "#"}
              alt="Аватар профиля"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__user-nickname">{currentUser.name || ""}</h1>
            <button
              className="profile__edit-btn"
              type="button"
              onClick={onEditProfile}
            />
            <p className="profile__user-description">
              {currentUser.about || ""}
            </p>
          </div>
          <button
            className="profile__add-btn"
            type="button"
            aria-label="Добавить фото"
            onClick={onAddCard}
          />
        </div>
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className="gallery__list">
          {cards.map((data) => {
            return (
              <li className="gallery__list-item" key={data._id}>
                <Card
                  card={data}
                  onCardImageClick={onCardImageClick}
                  onDelete={onDelete}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
