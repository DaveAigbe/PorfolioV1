import React from 'react';
import styles from './component_styles/Hero.module.css';

const Hero = ({heroObj}) => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <header>
                    {/*<Image src={'/images/profile.jpg'} height={198} width={257} alt={'dave'} className={styles.profile}/>*/}
                    <h3>{heroObj.introduction.greet}</h3>
                    <h2 className={styles.title_name}>
                        <a href={heroObj.links.linkedin.link} target={'_blank'} rel={'noreferrer'}>
                            {heroObj.introduction.name}
                        </a>
                    </h2>
                    <h1 className={styles.title_statement}>
                        {heroObj.introduction.statement}
                    </h1>
                </header>
                <section>
                    <p className={styles.description}>
                        {heroObj.description.content[0].content[0].value}
                    </p>
                    <a href={heroObj.links.projects.link}>
                        <button className={styles.button}>{heroObj.links.projects.title}</button>
                    </a>
                    <a href={heroObj.links.github.link} target={'_blank'} rel={'noreferrer'}>
                        <button className={styles.button}>{heroObj.links.github.title}</button>
                    </a>
                </section>
            </div>
        </section>
    );
};

export default Hero;
