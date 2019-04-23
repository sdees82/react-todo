import React from "react";
import style from './Tasks.module.css';
import {Spring} from 'react-spring/renderprops';


const Tasks = ({getCompletedItem, listItems, removeItem}) => {
            if(listItems.length > 0){
                return(
                    <Spring
                        from={{ opacity: 0, width: 100}}
                        to={{ opacity: 1,  width: 400}}
                        >
                        {(props)=> (
                            <div style={props} key={0}>
                             <ul className={style.ul}>
                             {
                                
                                listItems.map((val, index) =>{
                                     return (
                                                <Spring
                                                from={{ opacity: 0 }}
                                                to={{ opacity: 1 }}
                                                key={index}>
                                                {
                                                    (props)=> (
                                                        <div style={props} key={index}>
                                                        <div className={style.itemContainer} >
                                                    <li  style={{textDecoration: val.done ? 'line-through': 'none'}} className={style.li} onClick={getCompletedItem.bind(this, index)} >
                                                    <span className={style.triangle}></span>{val.value}</li>
                                                    <span onClick={removeItem.bind(this, index)} className={style.delete}>X</span>
                                                </div>
                                                </div>
                                                    )
                                                }                                         
                                             </Spring>
                                     )
                                 })
                             }
                         </ul>
                    </div>
                        )}
                   
                    </Spring>
                );
            }else{
                return(
                    <Spring
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {
                        (props)=> (
                            <div style={props} key={0}>
                    <ul className={style.noTasks}>
                        <li className={style.li} >No Tasks Scheduled</li>
                    </ul>
                   </div>
                        )}
                    </Spring>
                );
            }
}
export default Tasks;