import React, {useContext} from 'react';
import styles from './component_styles/Hero.module.css';
import {Context} from './context/Context';

const Hero = () => {
    const [context] = useContext(Context);

    const heroData = context.hero

    return (
        <section>
            <div className={styles.content}>
                <header>
                    <h3 className={styles.title_greet}>{heroData.introduction.greet}</h3>
                    <h2 className={styles.title_name}>
                        <a href={heroData.links.linkedin.link} target={'_blank'} rel={'noreferrer'}>
                            {heroData.introduction.name}
                        </a>
                    </h2>
                    <h1 className={styles.title_statement}>
                        {heroData.introduction.statement}
                    </h1>
                </header>
                <section>
                    <p className={styles.description}>
                        {heroData.description.content[0].content[0].value}
                    </p>
                    <div className={styles.buttons}>
                        <a href={heroData.links.projects.link}>
                            <button className={styles.button}>{heroData.links.projects.title}</button>
                        </a>
                        <a href={heroData.links.github.link} target={'_blank'} rel={'noreferrer'}>
                            <button className={styles.button}>{heroData.links.github.title}</button>
                        </a>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;
