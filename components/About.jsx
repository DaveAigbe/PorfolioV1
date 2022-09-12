import React from 'react';
import styles from './component_styles/About.module.css';

const About = ({aboutObj}) => {
    return (
        <section className={styles.container}>
            <header>
                <h1 className={styles.title}>About <span className={styles.title_focus}>Me</span></h1>
            </header>
            <section className={styles.description}>
                {aboutObj.map((paragraph) => {
                        return (
                            <div key={paragraph.id}>
                                <p>{paragraph.text}</p>
                            </div>
                        );
                    }
                )}
            </section>
        </section>
    );
};

export default About;
