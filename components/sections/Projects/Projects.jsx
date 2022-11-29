import React, {useContext} from 'react';
import styles from '../../component_styles/sections/Projects/Projects.module.css';
import {Context} from '../../context/Context';
import {Project} from './Project';

const Projects = () => {
    const [context] = useContext(Context);
    const projectsData = context.projects;

    return (
        <section className={styles.container}>
            <header>
                <h2 className={styles.title}>My <span className={styles.title_focus}>Projects</span></h2>
            </header>
            <section className={styles.cards_grid}>
                {projectsData.map((project) => {
                        return (
                            <div key={project.id} className={styles.card}>
                                <Project project={project}/>
                            </div>
                        );
                    }
                )}
            </section>
        </section>
    );
};

export default Projects;
