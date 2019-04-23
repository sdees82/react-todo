import React from 'react';
import style from './Progress.module.css';

const Progress = ({completed, percentage, numOfTasks}) => {
    return(
        <section className={style.progressSection}>
            <div className={style.progressContainer}>
                <h2 className={style.h2}>Progress</h2>
                <p className={style.p}>{`${completed}/${numOfTasks}`}</p>
            </div>
            <div style={{width: `${percentage}%`}}className={style.progressBar}>
                <span className={style.progressBarInner}></span>
            </div>
                <p className={style.progressPercentage}>{`${percentage}%`}</p>
        </section>
    )
}

export default Progress;