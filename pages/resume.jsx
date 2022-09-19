import React from 'react';
import Image from 'next/image';
import styles from '../styles/Resume.module.css';

const Resume = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.title}>My <span className={styles.title_focus}>Resume</span></h1>
            </header>
            <a className={styles.link_container}
               href={'https://drive.google.com/file/d/1HXaFPa_sJ8ExF0O289ZuSQU0B-klhx9_/view?usp=sharing'} target={'_blank'}>
                <Image className={styles.image} src={'/images/resume_img.png'} width={897} height={1162}
                       alt={'picture of resume'}/>
            </a>
        </div>
    );
};

export default Resume;
