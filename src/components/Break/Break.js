import React, { } from 'react';

import './Breaks.css'

const Break = ({ handleBtnFirst, handleBtnSecond, handleBtnThird, handleBtnFourth, handleBtnFifth, handleBtnSixth }) => {






    return (
        <div>
            <h2> Add A Break</h2>
            <div className='break'>
                <button onClick={handleBtnFirst} className='btn-break'>10s</button>
                <button onClick={handleBtnSecond} className='btn-break'>20s</button>
                <button onClick={handleBtnThird} className='btn-break'>30s</button>
                <button onClick={handleBtnFourth} className='btn-break'>40s</button>
                <button onClick={handleBtnFifth} className='btn-break'>50s</button>
                <button onClick={handleBtnSixth} className='btn-break'>60s</button>
            </div>

        </div>
    );
};

export default Break;