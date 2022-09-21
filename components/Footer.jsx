import React from 'react';
import styles from './component_styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({context, homePage}) => {

    const logo = `https:${context.logo}`;

    return (
        <div>
            <footer className={styles.footer}>
                {!homePage
                    &&
                    (
                        <div className={styles.home_container}>
                            <Link href="/">
                                <a>← Home</a>
                            </Link>
                        </div>
                    )}
                <a href={'#top'}><Image src={logo} height={46} width={87} alt={'Dave Aigbe Logo'}/></a>
            </footer>
        </div>
    );
};

export default Footer;
