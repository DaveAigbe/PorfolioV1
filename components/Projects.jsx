import React from 'react';
import styles from './component_styles/Projects.module.css';

const Projects = () => {
    return (
        <section className={styles.container}>
            <header className={styles.title}>
                <h1>My <span className={styles.title_focus}>Projects</span></h1>
            </header>
            <section className={styles.grid}>
                {projectsObj.map((project) => {
                        return (
                            <div key={project.id}>
                                <a href={project.link} target={'_blank'} rel={'noreferrer'} className={styles.card}>
                                    <h2>{project.title} &rarr;</h2>
                                </a>
                                <p>
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
