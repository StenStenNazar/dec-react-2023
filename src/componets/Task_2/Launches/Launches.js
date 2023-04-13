import React, {useState, useEffect} from 'react';

import Launch from '../Launch/Launch'
import './Launches.css'

const Launches = () => {

    const [launches, setLaunches] = useState();
    const url = 'https://api.spacexdata.com/v3/launches?filter=launch_year,flight_number,mission_name,links/mission_patch_small'

    useEffect(() => {
        fetch(url)
            .then(value => value.json())
            .then((values => setLaunches(values.filter(value => value.launch_year != 2020))))
    }, [])

    return (
        <div className={'wrappe'}>
            <h1>SpaceX API - fetch</h1>
            <div className={'launches'}>{launches && launches.map(launch => <Launch key={launch.flight_number}
                                                                                    launch={launch}/>)}
            </div>
        </div>
    );
};

export default Launches;