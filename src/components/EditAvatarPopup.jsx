import { useRef } from "react";
import useFormValidator from "../hooks/useFormValidator.js";
import PopupWithForm from "./PopupWithForm.jsx";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputElement = useRef();
  const { values, errors, isInputValid, isValid, handleChange, reset } =
    useFormValidator();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: inputElement.current.value }, reset);
  }

  function closeWithReset() {
    onClose();
    reset();
  }

  return (
    <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      buttonDefaultValue="Сохранить"
      isOpen={isOpen}
      onClose={closeWithReset}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <div className="popup__input-container">
        <input
          ref={inputElement}
          className={`popup__form-field popup__form-field_input_link ${
            isInputValid.avatar === undefined || isInputValid.avatar
              ? ""
              : "popup__form-field_invalid"
          }`}
          name="avatar"
          type="url"
          placeholder="Ссылка на картинку"
          required
          value={values.avatar || ""}
          onChange={handleChange}
        />
        <span id="nickname-error" className="error">
          {errors.avatar}
        </span>
      </div>
    </PopupWithForm>
  );
}
