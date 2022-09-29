import React from 'react';
import './Activity.css'

const Activity = ({ activity, handleAddTime }) => {
    const { img, name, time } = activity;
    // const { handleAddTime } = props;


    return (
        <div className='activity'>


            <img src={img} alt="" />
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p className='activity-time'>Time:{time}s</p>

            </div>
            <button onClick={() => handleAddTime(activity)} className='btn-add'>
                <p>Add To List</p>

            </button>





        </div>
    );
};

export default Activity;