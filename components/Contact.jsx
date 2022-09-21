import React, {useContext} from 'react';
import styles from './component_styles/Contact.module.css';
import {Icon} from '@iconify/react';
import {Context} from '../pages/context/Context';

const Contact = () => {
    const [context] = useContext(Context);

    const contactData = context.contact

    return (
        <section className={styles.container}>
            <header>
                <h1 className={styles.title}>Contact <span className={styles.title_focus}>Me</span></h1>
            </header>
            <section className={styles.icon_container}>
                {contactData.map((contact) => {
                        return (
                            <React.Fragment key={contact.id}>
                                {contact.title === 'email' ? (
                                    <a className={styles.icon_link} href={contact.link} rel={'noreferrer'}>
                                        <Icon className={styles.icon} icon={contact.icon} width={'90'} inline={true}/>
                                    </a>
                                ) : (
                                    <a  className={styles.icon_link} href={contact.link} target={'_blank'} rel={'noreferrer'}>
                                        <Icon className={styles.icon} icon={contact.icon} width={'90'} inline={true}/>
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
