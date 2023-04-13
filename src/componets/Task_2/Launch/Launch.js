import React from 'react';

import './Launch.css'

const Launch = ({launch}) => {
    const {launch_year, flight_number, mission_name, mission_patch_smal, links: {mission_patch_small}} = launch


    return (
        <div className={'launch'}>
            <li><b>launch_year:</b>{launch_year}</li>
            <li>flight_number:{flight_number}</li>
            <li>mission_name:{mission_name}</li>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Launch;