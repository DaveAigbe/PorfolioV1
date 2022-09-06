import React from 'react';
import styles from './component_styles/Projects.module.css';

const Projects = () => {
    return (
        <section className={styles.container}>
            <header className={styles.title}>
                <h1>My <span className={styles.title_focus}>Projects</span></h1>
            </header>
            <section className={styles.grid}>
                <a href="https://github.com/DaveAigbe/Yummy" target={'_blank'} rel={'noreferrer'} className={styles.card}>
                    <h2>Yummy! &rarr;</h2>
                </a>
                <p> A Recipe app that allows you to explore new delicious recipes everday!
                    Utilizes react.js and the spoonacular API.
                </p>

                <a href="https://github.com/DaveAigbe/CommandsAPI" target={'_blank'} rel={'noreferrer'} className={styles.card}>
                    <h2>CommanderAPI &rarr;</h2>
                </a>
                <p>With the mass amount CLI commands to learn, it is nice to have an API that stores
                    and returns the requests for different platforms. Built using ASP.NET Core. </p>
            </section>
        </section>
    );
};

export default Projects;
