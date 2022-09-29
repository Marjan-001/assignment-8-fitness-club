import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { img, name, time } = props.activity;
    return (
        <div className='activity'>


            <img src={img} alt="" />
            <div className='activity-info'>
                <p className='activity-name'>{name}</p>
                <p className='activity-time'>Time:{time}s</p>

            </div>
            <button className='btn-add'>
                <p>Add To List</p>

            </button>





        </div>
    );
};

export default Activity;