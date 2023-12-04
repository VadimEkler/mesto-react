import { useRef } from "react";
import useFormValidator from "../hooks/useFormValidator.js";
import PopupWithForm from "./PopupWithForm.jsx";
import Input from "./Input.jsx";

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
      <Input 
        name="avatar" 
        type="url" 
        placeholder="Ссылка на картинку" 
        isInputValid={isInputValid.avatar}
        value={values.avatar}
        onChange={handleChange}
        error={errors.avatar}
      />    
      </PopupWithForm>
  );
}
