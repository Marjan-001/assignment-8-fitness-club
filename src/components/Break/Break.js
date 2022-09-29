import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h2> Add A Break</h2>
            <div className='btn-break'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
            </div>
        </div>
    );
};

export default Break;