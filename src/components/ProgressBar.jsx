import React from 'react';
import "../styles/ProgressBar.scss";

const ProgressBar = () => {
    return(
        <body>
            <div className='container1'>
                <div className='progress-container'>
                    <div className='progress' id='progress'></div>
                    <div className="circle active">
                    <img src='https://i.imgur.com/9rPwiIH.png'  alt='shopping-chart'/>
                    </div>
                    <div className="circle">
                    <img src='https://i.imgur.com/Ko2KbvU.png' alt='imagen de mapa'/>
                    </div>
                    <div className="circle">
                    <img src='https://i.imgur.com/mhDf3Jt.png' alt='imagen de simbolo de dinero'/>
                    </div>
                    <div className="circle">
                    <img src='https://i.imgur.com/LJ4FcMs.png' alt='imagen de confirmación'/>
                    </div>
                </div>
                <button className="btn" id="prev" disabled>Prev</button>
                <button className="btn" id="next">Next</button>
            </div>
        </body>
    );
}

export default ProgressBar