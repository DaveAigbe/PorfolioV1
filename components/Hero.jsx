import React, {useContext} from 'react';
import styles from './component_styles/Hero.module.css';
import {Context} from './context/Context';
import Link from 'next/link';

const Hero = () => {
    const [context] = useContext(Context);

    const heroData = context.hero;

    return (
        <section>
            <div className={styles.content}>
                <header>
                    <h3 className={styles.title_greet}>{heroData.introduction.greet}</h3>
                    <h1 className={styles.title_name}>
                        <a href={heroData.links.linkedin.link} target={'_blank'} rel={'noreferrer'}>
                            {heroData.introduction.name}
                        </a>
                    </h1>
                    <h3 className={styles.title_statement}>
                        {heroData.introduction.statement}
                    </h3>
                </header>
                <section>
                    <p className={styles.description}>
                        {heroData.description.content[0].content[0].value}
                    </p>
                    <div className={styles.buttons}>
                        <Link href={heroData.links.projects.link}>
                            <a className={styles.button}>{heroData.links.projects.title}</a>
                        </Link>
                        <a className={styles.button} href={heroData.links.github.link} target={'_blank'} rel={'noreferrer'}>
                            {heroData.links.github.title}
                        </a>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;
