import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='question'>
            <div >
                <h1> Props Vs State</h1>
                <p> Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component.</p>
            </div>
            <div>
                <h1> How Reacts Work?</h1>
                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
            </div>
            <div>
                <h1> What are the Use of UseEffect other than fetching data?
                </h1>
                <p> The other use of useEffect are: Reading from local storage
                    Registering and deregistering event listeners</p>
            </div>
        </div>
    );
};

export default Questions;