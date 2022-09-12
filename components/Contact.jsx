import React from 'react';
import styles from './component_styles/Contact.module.css';
import {Icon} from '@iconify/react';

const Contact = ({contactObj}) => {
    return (
        <section>
            <header>
                <h1 className={styles.title}>Contact <span className={styles.title_focus}>Me</span></h1>
            </header>
            <section className={styles.icon_container}>
                {contactObj.map((contact) => {
                        return (
                            <React.Fragment key={contact.id}>
                                {contact.title === 'email' ? (
                                    <a className={styles.icon} href={contact.link} rel={'noreferrer'}>
                                        <Icon icon={contact.icon} width="90" inline={true}/>
                                    </a>
                                ) : (
                                    <a  className={styles.icon} href={contact.link} target={'_blank'} rel={'noreferrer'}>
                                        <Icon icon={contact.icon} width="90" inline={true}/>
                                    </a>
                                )}
                            </React.Fragment>
                        );
                    }
                )}
            </section>
        </section>
    );
};

export default Contact;
