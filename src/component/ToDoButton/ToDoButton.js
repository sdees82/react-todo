import React from 'react';
import style from './ToDoButton.module.css'

const Button = ({addListItem, buttonText}) =>{
    return(
        <button onClick={addListItem} className={style.button}>+</button>
    );
}

export default Button;
