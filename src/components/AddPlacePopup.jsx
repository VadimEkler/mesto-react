import PopupWithForm from "./PopupWithForm.jsx";
import useFormValidator from "../utils/useFormValidator.js";

export default function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const { values, errors, isInputValid, isValid, handleChange, reset } =
    useFormValidator();

  function closeWithReset() {
    onClose();
    reset();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name: values.name, link: values.link }, reset);
  }

  return (
    <PopupWithForm
      name="add-image"
      title="Новое место"
      buttonDefaultValue="Создать"
      isOpen={isOpen}
      onClose={closeWithReset}
      isValid={isValid}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          className={`popup__form-field popup__form-field_input_title ${
            isInputValid.name === undefined || isInputValid.name
              ? ""
              : "popup__form-field_invalid"
          }`}
          name="name"
          type="text"
          placeholder="Новое место"
          minLength={2}
          maxLength={30}
          required
          value={values.name || ""}
          onChange={handleChange}
        />
        <span id="name-error" className="error">
          {errors.name}
        </span>
      </div>
      <div className="popup__input-container">
        <input
          className={`popup__form-field popup__form-field_input_link ${
            isInputValid.link === undefined || isInputValid.link
              ? ""
              : "popup__form-field_invalid"
          }`}
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          required
          value={values.link || ""}
          onChange={handleChange}
        />
        <span id="link-error" className="error">
          {errors.link}
        </span>
      </div>
    </PopupWithForm>
  );
}
