export default function PopupWithForm({ name, title, buttonDefaultValue, children, isOpen, onClose }) {
  return (    
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`}>
      <div className="popup__content">
        <button className="popup__close-btn" type="button" onClick={onClose}/>
        <h2 className="popup__title">{title}</h2>
        <form
          className="popup__edit-form popup__edit-form_user"
          name={`${name}-edit-form`}
          noValidate=""
        >
          {children}
          <input
            className="popup__save-btn"
            type="submit"
            defaultValue={`${buttonDefaultValue}`}
          />
        </form>
      </div>
    </div>
  )
}