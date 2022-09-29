import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Break from '../Break/Break';
import Detail from '../Detail/Detail';
import './Home.css'

const Home = () => {
    const [activities, setActivity] = useState([]);
    useEffect(() => {

        fetch('db.json')
            .then(res => res.json())
            .then(data => setActivity(data))

    }, [])


    return (
        <div className='home'>
            <div className="activity-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}

                    ></Activity>)
                }
            </div>
            <div className="profile-container">
                <h2> Profile: Marjan</h2>
                <p>Location: Bangladesh</p>
                <div>
                    <div className='profile'>
                        <h5>Weight:50kg</h5>

                        <h5>Height:5.5ft</h5>

                        <h5>Age: 23yrs</h5>


                    </div>
                </div>
                <div>
                    <Break></Break>
                </div>
                <Detail></Detail>

                <button className='btn-complete'> Activity Completed</button>
            </div>

        </div>
    );
};

export default Home;