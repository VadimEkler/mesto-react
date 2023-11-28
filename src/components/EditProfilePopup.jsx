import { useContext, useEffect } from "react"
import PopupWithForm from "./PopupWithForm.jsx"
import CurrentUserContext from "../contexts/CurrentUserContext.js";
import useFormValidator from "../utils/useFormValidator.js";

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = useContext(CurrentUserContext);
    const { values, errors, isInputValid, isValid, handleChange, reset, setValue } = useFormValidator(); 

    useEffect(() => {
      setValue("nickname", currentUser.name);
      setValue("description", currentUser.about);
    }, [currentUser, setValue])

    function closeWithReset() {
      onClose();
      reset({ nickname: currentUser.name, description: currentUser.about })
    }

    function handleSubmit(e) {
      e.preventDefault();
      onUpdateUser({nickname: values.nickname, description: values.description}, reset)
    }

    return (
        <PopupWithForm
        name="user-info"
        title="Редактировать профиль"
        buttonDefaultValue="Сохранить"
        isOpen = {isOpen}
        onClose = {closeWithReset}
        isValid = {isValid}
        onSubmit = {handleSubmit}
        >
        <div className="popup__input-container">
          <input
            className={`popup__form-field popup__form-field_input_nickname ${isInputValid.nickname === undefined || isInputValid.nickname ? '' : 'popup__form-field_invalid'}`}
            name="nickname"
            type="text"
            placeholder="Ваше имя"
            minLength={2}
            maxLength={40}
            required
            value = {values.nickname || ''}
            onChange={handleChange}
          />
          <span id="nickname-error" className="error">{errors.nickname}</span>
        </div>
        <div className="popup__input-container">
          <input
            className={`popup__form-field popup__form-field_input_description ${isInputValid.description === undefined || isInputValid.description ? '' : 'popup__form-field_invalid'}`}
            name="description"
            type="text"
            placeholder="Расскажите о себе"
            minLength={2}
            maxLength={200}
            required
            value = {values.description || ''}
            onChange={handleChange}
          />
          <span id="description-error" className="error">{errors.description}</span>
        </div>
      </PopupWithForm>

    )
}