import React, { } from 'react';
import './Detail.css'

const Detail = ({ detailExerciseTime }) => {
    let totalTime = 0;
    for (const exerciseTime of detailExerciseTime) {
        totalTime = totalTime + exerciseTime.time
    }




    return (
        <div>
            <h2>Exercise Details</h2>
            <div className='exercise-time'>
                <h2>Exercise Time:{totalTime}seconds</h2>

            </div>
            <div className='break-time'><h2> Break Time:</h2></div>
        </div>
    );
};

export default Detail;