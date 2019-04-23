import React from 'react';
import style from './FormInput.module.css'

const FormInput = ({clearFocus, currentInput, inputChange}) => {
    return(
        <input onChange={inputChange}  onFocus={clearFocus} className={style.input} type="text" value={currentInput}/>
    );
}

export default FormInput;