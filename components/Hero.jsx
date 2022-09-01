import React from 'react';
import styles from './component_styles/hero.module.css';

const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <header>
                    {/*<Image src={'/images/profile.jpg'} height={198} width={257} alt={'dave'} className={styles.profile}/>*/}
                    <h3>Hi, my name is</h3>
                    <h2 className={styles.title}>
                        <a href="https://www.linkedin.com/in/dave-aigbe-jr-aa262a235/" target={'_blank'} rel={'noreferrer'}>Dave
                            Aigbe.</a>
                    </h2>
                    <h1 className={styles.title_statement}>I enjoy building things for the web.</h1>
                </header>
                <section>
                    <p className={styles.description}>
                        {`I am currently a computer science student and aspiring software developer. Focusing on web technologies
                        and increasing my proficiencies in full-stack development.`}
                    </p>
                    <a href={'#contact'} className={styles.button}>
                        <button className={styles.button}>Projects</button>
                    </a>
                    <a href="https://github.com/DaveAigbe" target={'_blank'} rel={'noreferrer'}>
                        <button className={styles.button}>Github</button>
                    </a>
                </section>
            </div>
        </section>
    );
};

export default Hero;
