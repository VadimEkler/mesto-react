export default function Form({ name, children, buttonDefaultValue, isValid, onSubmit }) {
    
    
    return(
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
              disabled = {!isValid} 
            />
          </form>

    )
}