import React from 'react';
import styles from './component_styles/Skills.module.css';
import {Icon} from '@iconify/react';

const Skills = ({skillsObj}) => {
    return (
        <section className={styles.container}>
            <header>
                <h1 className={styles.title}>My <span className={styles.title_focus}>Skills</span></h1>
            </header>
            <section>
                <ul className={styles.icon_container}>
                    {skillsObj.map((skill) => {
                            return (
                                <div key={skill.id}>
                                    <li><Icon  className={styles.icon} icon={skill.icon} width={'90'}/></li>
                                </div>
                            )
                        }
                    )}
                </ul>
            </section>
        </section>
    );
};

export default Skills;
