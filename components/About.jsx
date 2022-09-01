import React from 'react';
import styles from "./component_styles/About.module.css";

const About = () => {
    return (
        <section className={styles.container}>
            <header>
                <h1 className={styles.title}>About <span className={styles.title_focus}>Me</span></h1>
            </header>
            <section>
                <p>
                    {`Hello! My name is Dave Aigbe and I am a computer science student and an eager programmer
                    studying software development.`}
                </p>
                <p>
                    {`I'm enthusiastic about
                    the entire tech ecosystem and learning new things about software that I can create through
                    programming. I started dabbling with coding during the pandemic, but during late 2021 after
                    seeing
                    how much I could learn and build, my interest truly peaked. My curiosity currently lies in
                    fullstack development and exploring how to improve my skills with creating interactive user
                    interfaces,
                    but also building the backend technologies that are needed for them.`}
                </p>
                <p>
                    {`When I'm not coding I play games with friends, workout, and most importantly explore new
                    food
                    dishes and restaurants!`}
                </p>
            </section>
        </section>
    );
};

export default About;
