import React, {useEffect, useState} from 'react';
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import axios from 'axios';
import Graph from './Graph';
import CircleLoader from './CircleLoader';

ChartJS.register(ArcElement, Tooltip, Legend);

const apiData = async () => {
    const res = await axios.get('https://fitness-tracking-api.herokuapp.com/workouts/?json=true');
    return await res.data;
};

const Widget = () => {
    const [graphData, setGraphData] = useState({});
    // Loading state, will ensure that something still renders while data is being pulled
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiData().then((data) => {
                setGraphData(data);
                setLoading(false);
            }
        );
    }, []);

    if (loading) {
        return (
            <CircleLoader/>
        );
    } else {
        return (
            <Graph graphData={graphData}/>
        );
    }
};

export default Widget;
