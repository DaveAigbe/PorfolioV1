import React from 'react';
import styles from './component_styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({homePage}) => {
    return (
        <div>
            <footer className={styles.footer}>
                <a href={'#top'}><Image src={'/images/my_logo.png'} height={90} width={120} alt={'Dave Aigbe Logo'}/></a>
                {!homePage
                    &&
                    (
                        <div className={styles.backToHome}>
                            <Link href="/">
                                <a>← Back to home</a>
                            </Link>
                        </div>
                    )}
            </footer>
        </div>
    );
};

export default Footer;
