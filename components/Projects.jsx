import React from 'react';
import styles from './component_styles/Projects.module.css';

const Projects = ({projectsObj}) => {
    return (
        <section className={styles.container}>
            <header>
                <h1 className={styles.title}>My <span className={styles.title_focus}>Projects</span></h1>
            </header>
            <section className={styles.cards_grid}>
                {projectsObj.map((project) => {
                        return (
                            <div key={project.id} className={styles.card}>
                                <a href={project.link} target={'_blank'} rel={'noreferrer'}>
                                    <h2 className={styles.card_title}>
                                        {project.title} <span className={styles.arrow}>&rarr;</span>
                                    </h2>
                                </a>
                                <p className={styles.card_description}>
                                    {project.description}
                                </p>
                            </div>
                        );
                    }
                )}
            </section>
        </section>
    );
};

export default Projects;
