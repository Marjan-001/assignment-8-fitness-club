import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from '../../utilities/fakedb';
import Activity from '../Activity/Activity';
import Break from '../Break/Break';
import Detail from '../Detail/Detail';
import Questions from '../Questions/Questions';
import './Home.css'

const Home = () => {
    const [activities, setActivity] = useState([]);

    useEffect(() => {

        fetch('db.json')
            .then(res => res.json())
            .then(data => setActivity(data))

    }, [])
    const [detailExerciseTime, setExerciseTime] = useState([]);

    const handleAddTime = (activity) => {
        // console.log(time);
        const newDetailExercise = [...detailExerciseTime, activity];
        setExerciseTime(newDetailExercise);
    }
    const [selectBreak, setSelectBreak] = useState(0);
    const handleBtnFirst = () => {

        const value1 = 10;
        setSelectBreak(value1);
        addToDb(selectBreak);

    }
    const handleBtnSecond = () => {

        const value2 = 20;
        setSelectBreak(value2);
        addToDb(selectBreak);

    }
    const handleBtnThird = () => {

        const value3 = 30;
        setSelectBreak(value3);
        addToDb(selectBreak);

    }
    const handleBtnFourth = () => {

        const value4 = 40;
        setSelectBreak(value4);
        addToDb(selectBreak);

    }
    const handleBtnFifth = () => {

        const value5 = 50;
        setSelectBreak(value5);
        addToDb(selectBreak);

    }
    const handleBtnSixth = () => {

        const value6 = 60;
        setSelectBreak(value6);
        addToDb(selectBreak);

    }
    const notify = () => toast("Congratulation Activity Completed");
    return (
        <div className='home'>
            <div className="activity-container">
                {
                    activities.map(activity => <Activity
                        key={activity.id}
                        activity={activity}
                        handleAddTime={handleAddTime}


                    ></Activity>)
                }
            </div>
            <div className="profile-container">
                <h2> Profile: Marjan</h2>

                <div>
                    <div className='profile'>
                        <h5>Weight:50kg</h5>

                        <h5>Height:5.5ft</h5>

                        <h5>Age: 23yrs</h5>


                    </div>
                </div>
                <div>
                    <Break handleBtnFirst={handleBtnFirst}
                        handleBtnSecond={handleBtnSecond}
                        handleBtnThird={handleBtnThird}
                        handleBtnFourth={handleBtnFourth}
                        handleBtnFifth={handleBtnFifth}
                        handleBtnSixth={handleBtnSixth}
                    ></Break>
                </div>
                <Detail detailExerciseTime={detailExerciseTime}
                    selectBreak={selectBreak}
                ></Detail>

                <button onClick={notify} className='btn-complete'> Activity Completed</button>
                <ToastContainer />
            </div>
            <Questions></Questions>

        </div>
    );
};

export default Home;