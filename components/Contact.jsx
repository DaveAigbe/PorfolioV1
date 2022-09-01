import React from 'react';
import styles from "./component_styles/Contact.module.css";
import {Icon} from "@iconify/react";

const Contact = () => {
    return (
        <section>
            <header>
                <h1 className={styles.title}>Contact <span className={styles.title_focus}>Me</span></h1>
            </header>
            <section className = {styles.icon_container}>
                <a href={'mailto:dave.aigbe@outlook.com'} rel={'noreferrer'}><Icon icon="clarity:email-solid" width="90" inline={true}/></a>
                <a href={'https://www.linkedin.com/in/dave-aigbe-jr-aa262a235/'} target={'_blank'} rel={'noreferrer'}><Icon icon="fa6-brands:linkedin" color="white" width="90" inline={true}/></a>
                <a href={'https://github.com/DaveAigbe'} target={'_blank'} rel={'noreferrer'}><Icon icon="fa-brands:github" width="90" inline={true}/></a>
            </section>
        </section>
    );
};

export default Contact;
