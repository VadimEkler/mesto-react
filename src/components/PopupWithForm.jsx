export default function PopupWithForm({
  name,
  title,
  buttonDefaultValue,
  children,
  isOpen,
  onClose,
  onSubmit,
  isValid = true,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__content">
        <button className="popup__close-btn" type="button" onClick={onClose} />
        <h2
          className={`${
            name === "delete" ? "popup__title_type_delete" : ""
          } popup__title`}
        >
          {title}
        </h2>
        <form
          className="popup__edit-form popup__edit-form_user"
          name={`${name}-edit-form`}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <input
            className={`popup__save-btn ${
              isValid ? "" : "popup__save-btn_invalid"
            }`}
            type="submit"
            value={`${buttonDefaultValue}`}
          />
        </form>
      </div>
    </div>
  );
}
