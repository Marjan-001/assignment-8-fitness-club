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
                <button className='btn-add'> ADD To List</button>
            </div>





        </div>
    );
};

export default Activity;