import Header from "./header/Header.jsx";
import Main from "./main/Main.jsx";
import Footer from "./footer/Footer.jsx";
import PopupWithForm from "./popupWithForm/popupWithForm.jsx";
import ImagePopup from "./imagePopup/imagePopup.jsx";
import { useState } from "react";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopup, setIsImagePopup] = useState(false);
  


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopup(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopup(false);
  }

  return (
    <>
      <Header/>

      <Main
        onEditProfile = {handleEditProfileClick}
        onEditAvatar = {handleEditAvatarClick}
        onAddPlace = {handleAddPlaceClick}
        onCardImageClick = {handleCardClick}
      />

      <Footer/>

      <PopupWithForm 
      name="user-info"
      title="Редактировать профиль"
      buttonDefaultValue="Сохранить"
      isOpen = {isEditProfilePopupOpen}
      onClose = {closeAllPopups}
      >
        <div className="popup__input-container">
          <input
            className="popup__form-field popup__form-field_input_nickname"
            name="nickname"
            type="text"
            placeholder="Ваше имя"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span id="nickname-error" className="error" />
        </div>
        <div className="popup__input-container">
          <input
            className="popup__form-field popup__form-field_input_description popup__form-field_input_description"
            name="description"
            type="text"
            placeholder="Расскажите о себе"
            minLength={2}
            maxLength={200}
            required=""
          />
          <span id="description-error" className="error" />
        </div>

      </PopupWithForm>

      <PopupWithForm 
      name="add-image"
      title="Новое место"
      buttonDefaultValue="Создать"
      isOpen = {isAddPlacePopupOpen}
      onClose = {closeAllPopups}
      >
        <div className="popup__input-container">
          <input
            className="popup__form-field popup__form-field_input_title"
            name="name"
            type="text"
            placeholder="Новое место"
            minLength={2}
            maxLength={30}
            required=""
          />
          <span id="name-error" className="error" />
        </div>
        <div className="popup__input-container">
          <input
            className="popup__form-field popup__form-field_input_link"
            name="link"
            type="url"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span id="link-error" className="error" />
        </div>
      </PopupWithForm>  

      <PopupWithForm 
      name="edit-avatar"
      title="Обновить аватар"
      buttonDefaultValue="Сохранить"
      isOpen = {isEditAvatarPopupOpen}
      onClose = {closeAllPopups}
      >
        <div className="popup__input-container">
          <input
            className="popup__form-field popup__form-field_input_link"
            name="avatar"
            type="url"
            placeholder="Ссылка на картинку"
            required=""
          />
          <span id="avatar-error" className="error" />
        </div>
      </PopupWithForm>

      <PopupWithForm 
      name="delete"
      title="Вы уверены?"
      buttonDefaultValue="Да"
      />

     <ImagePopup card={selectedCard} isOpen={isImagePopup} onClose={closeAllPopups}/>
  </>
  );
}

export default App;
