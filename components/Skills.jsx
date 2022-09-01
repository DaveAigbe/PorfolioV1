import React from 'react';
import styles from './component_styles/Skills.module.css';
import {Icon} from "@iconify/react";

const Skills = () => {
    return (
        <section>
            <header>
                <h1 className={styles.title}>My <span className={styles.title_focus}>Skills</span></h1>
            </header>
            <section>
                <ul className={styles.icon_container}>
                    <li><Icon icon="vscode-icons:file-type-reactjs" width={"90"}/></li>
                    <li><Icon icon="logos:javascript" width={"90"}/></li>
                    <li><Icon icon="logos:python" width={"90"}/></li>
                    <li><Icon icon="logos:c-sharp" width={"90"}/></li>
                    <li><Icon icon="logos:java" width={"90"}/></li>
                    <li><Icon icon="vscode-icons:file-type-html" width={"90"}/></li>
                    <li><Icon icon="vscode-icons:file-type-css" width={"90"}/></li>
                    <li><Icon icon="logos:git-icon" width={"90"}/></li>
                    <li><Icon icon="logos:mysql" width={"90"}/></li>
                    <li><Icon icon="flat-color-icons:linux" width={"90"}/></li>
                    <li><Icon icon="logos:postgresql" width={"90"}/></li>
                    <li><Icon icon="cib:dot-net" width={"90"}/></li>
                    <li><Icon icon="logos:docker-icon" width={"90"}/></li>
                    <li><Icon icon="logos:postman-icon" width={"90"}/></li>
                </ul>
            </section>
        </section>
    );
};

export default Skills;
