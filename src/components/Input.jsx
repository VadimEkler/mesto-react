export default function Input({ name, type, placeholder, minLength, maxLength, value, onChange, isInputValid, error }) {
    
    return(
        <div className="popup__input-container">
            <input
                className={`popup__form-field ${ isInputValid === undefined || isInputValid ? "" : "popup__form-field_invalid"} `}
                name= {name}
                type= {type}
                placeholder= {placeholder}
                minLength= {minLength || ''}
                maxLength= {maxLength|| ''}
                required
                value= {value || ''}
                onChange= {onChange}
            />
        
            <span className="error">
                {error}
            </span>
        </div>
    )
}