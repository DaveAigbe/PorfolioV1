import styles from '../../component_styles/sections/Projects/Project.module.css';

export const Project = ({project}) => {
    return (
        <>
            <h3>
                <a tabIndex={0} className={styles.card_title} href={project.link} target={'_blank'} rel={'noreferrer'}>
                    {project.title} <span className={styles.arrow}>&rarr;</span>
                </a>
            </h3>
            {/*<Card project={project}/>*/}
            <p className={styles.card_description}>
                {project.description}
            </p>
            <p className={styles.card_links}>
                <a className={styles.card_link} target={'_blank'} rel={'noreferrer'} href={project.link}>Source Code</a>
                {project.live &&
                    <a className={styles.card_link} target={'_blank'} rel={'noreferrer'} href={project.live}>Live</a>}
            </p>
        </>
    );
};
