import React, {useContext} from 'react';
import styles from './component_styles/Skills.module.css';
import {Icon} from '@iconify/react';
import {Context} from './context/Context';

const Skills = () => {
    const [context] = useContext(Context);
    const skillsData = context.skills;

    return (
        <section className={styles.container}>
            <header>
                <h2 className={styles.title}>My <span className={styles.title_focus}>Skills</span></h2>
            </header>
            <section>
                <ul className={styles.icon_container}>
                    {skillsData.map((skill) => {
                            return (
                                <div tabIndex={0} key={skill.id}>
                                    <li><Icon className={styles.icon} icon={skill.icon} width={'90'}/></li>
                                </div>
                            );
                        }
                    )}
                </ul>
            </section>
        </section>
    );
};

export default Skills;
