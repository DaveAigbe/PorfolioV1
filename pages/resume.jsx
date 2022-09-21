import React from 'react';
import Image from 'next/image';
import styles from '../styles/Resume.module.css';
import Footer from '../components/Footer';
import {useRouter} from 'next/router';

const Resume = () => {
    const router = useRouter();

    const {
        query: {logoUrl}
    } = router;

    const props = {
        logoUrl
    }

    return (
        <div className={styles.container}>
            <section className={styles.main}>
                <header>
                    <h1 className={styles.title}>My <span className={styles.title_focus}>Resume</span></h1>
                </header>
                <a className={styles.link_container}
                   href={'https://drive.google.com/file/d/1HXaFPa_sJ8ExF0O289ZuSQU0B-klhx9_/view?usp=sharing'} target={'_blank'}
                   rel={'noreferrer'}>
                    <Image className={styles.image} src={'/images/resume_img.png'} width={897} height={1162}
                           alt={'picture of resume'}/>
                </a>
            </section>
            <Footer logoUrl={props.logoUrl} />
        </div>
    );
};

export default Resume;
