import React from 'react';
import styles from './component_styles/About.module.css';

const About = ({aboutObj}) => {
    return (
        <section className={styles.container}>
            <header className={styles.title}>
                <h1>About <span className={styles.title_focus}>Me</span></h1>
            </header>
            <section>
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
