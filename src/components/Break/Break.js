import React from 'react';
import './Breaks.css'

const Break = () => {
    return (
        <div>
            <h2> Add A Break</h2>
            <div className='break'>
                <button className='btn-break'>10s</button>
                <button className='btn-break'>20s</button>
                <button className='btn-break'>30s</button>
                <button className='btn-break'>40s</button>
                <button className='btn-break'>50s</button>
                <button className='btn-break'>60s</button>
            </div>
        </div>
    );
};

export default Break;