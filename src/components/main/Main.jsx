import api from "../../utils/api";
import { useState, useEffect } from "react";
import Card from "../card/Card.jsx";


export default function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardImageClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([dataUser, dataCard]) => {
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);

        dataCard.forEach((data) => data.myId = dataUser._id)
        setCards(dataCard);

      })
    }, [])

 
  return(
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__card">
          <button type="button" className="profile__portrait-edit-btn" onClick={onEditAvatar}>
            <img className="profile__portrait" src={userAvatar} alt="Аватар профиля"/>
          </button>
          <div className="profile__info">
            <h1 className="profile__user-nickname">{userName}</h1>
            <button className="profile__edit-btn" type="button" onClick={onEditProfile}/>
            <p className="profile__user-description">{userDescription}</p>
          </div>
          <button
            className="profile__add-btn"
            type="button"
            aria-label="Добавить фото"
            onClick={onAddPlace}
          />
        </div>
      </section>
        <section className="gallery" aria-label="Галерея">
        <ul className="gallery__list">
          {cards.map((data) => {
            return (
              <li className="gallery__list-item" key={data._id}>
              <Card card = {data} onCardImageClick={onCardImageClick}/>
              </li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}