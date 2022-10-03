import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import styles from './component_styles/Graph.module.css';

const Graph = ({graphData}) => {
    const weight = graphData[0].weight;
    const bones = 8;
    const fat = (((graphData[0].fat_percentage) / 100) * weight) - bones;
    const muscle = graphData[0].muscle_mass;
    const date = new Date(graphData[0].date).toDateString();

    const data = {
        labels: ['Muscle (lbs)', 'Fat (lbs)', 'Bone Density'],
        datasets: [
            {
                label: 'Fitness Visualization',
                data: [muscle, fat, bones],
                backgroundColor: [
                    'rgba(0,245,41,0.5)',
                    'rgba(229,18,35,0.5)',
                    'rgba(237,245,0,0.5)',
                ],
                borderColor: [
                    'rgb(38,190,73)',
                    'rgb(148,13,23)',
                    'rgb(211,208,21)',
                ],
                borderWidth: 2,
            },
        ]
    };

    // TODO: Figure out how to change label colors on widget
    // TODO: Fix logo showing up on page transition
    // TODO: Add form send animation

    const options = {
        responsive: true,
        legend: {}
    };


    return (
        <div className={styles.container}>
            <div className={styles.graph_card}>
                <h6 className={styles.date}>{date}</h6>
                <h2>Fitness Progress Visualizer</h2>
                <h5 className={styles.graph_sub}>Goal: 175lbs</h5>
                <h5 className={styles.graph_sub}>Current: {weight}lbs</h5>
                <div className={styles.graph_sub}>
                    <Doughnut data={data}/>
                </div>
            </div>
        </div>
    );
};

export default Graph;
