import React from 'react';
import Header from '../Header/Header';
import Progress from '../Progress/Progress';
import FormInput from '../FormInput/FormInput'
import Tasks from '../Tasks/Tasks'
import ToDoButtom from '../ToDoButton/ToDoButton';
import style from './Form.module.css';
import {Spring} from 'react-spring/renderprops'


const Form = ({addListItem, clearFocus, completed, getCompletedItem, currentInput, inputChange, listItems, numOfTasks, percentage,  removeItem}) => {
    return(
                        <Spring
                        from={{ opacity: 0, width: 0}}
                        to={{ opacity: 1, width: `auto`}}
                        >
                        {(props)=> (
                             <div style={props} key={0}>
                                 <form className={style.form}>
            <div className={style.formContainer}>
                <Header/>
                <FormInput clearFocus={clearFocus} currentInput={currentInput} inputChange={inputChange}/>
                {
                    numOfTasks > 0 ? (
                        <Progress completed={completed} listItems={listItems} percentage={percentage} numOfTasks={numOfTasks}/>
                    ) : (
                        <div/>
                    )
                }
                    <Tasks
                    listItems={listItems}
                   addListItem={addListItem}
                   getCompletedItem={getCompletedItem}
                   removeItem={removeItem}/>
                <ToDoButtom addListItem={addListItem}/>
            </div>
        </form>
                             </div>
                        )}
       </Spring>
       
    )
}

export default Form;
