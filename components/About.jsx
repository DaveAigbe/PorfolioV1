import React, {useContext} from 'react';
import styles from './component_styles/About.module.css';
import {Context} from './context/Context';
import Widget from './Widget'

const About = () => {
    const [context] = useContext(Context);

    const aboutData = context.about

    return (
        <section className={styles.container}>
            <header>
                <h2  className={styles.title}>About <span className={styles.title_focus}>Me</span></h2>
            </header>
            <section className={styles.description}>
                {aboutData.map((paragraph) => {
                        return (
                            <div tabIndex={0} key={paragraph.id}>
                                <p>{paragraph.text}</p>
                            </div>
                        );
                    }
                )}
            </section>
            {/*<section>*/}
            {/*    <Widget/>*/}
            {/*</section>*/}
        </section>
    );
};

export default About;
