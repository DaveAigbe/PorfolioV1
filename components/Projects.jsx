import React, {useContext} from 'react';
import styles from './component_styles/Projects.module.css';
import {Context} from './context/Context';

const Projects = () => {
    const [context] = useContext(Context);

    const projectsData = context.projects

    return (
        <section className={styles.container}>
            <header>
                <h2 className={styles.title}>My <span className={styles.title_focus}>Projects</span></h2>
            </header>
            <section className={styles.cards_grid}>
                {projectsData.map((project) => {
                        return (
                            <div key={project.id} className={styles.card}>
                                <h3>
                                    <a tabIndex={0} className={styles.card_title} href={project.link} target={'_blank'} rel={'noreferrer'}>
                                        {project.title} <span className={styles.arrow}>&rarr;</span>
                                    </a>
                                </h3>
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
