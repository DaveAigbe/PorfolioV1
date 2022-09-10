import React from 'react';
import styles from './component_styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = ({logoUrl, homePage}) => {
    const logo = `https:${logoUrl}`

    return (
        <div>
            <footer className={styles.footer}>
                {/*<Icon icon="ant-design:arrow-up-outlined" color="#eee" width={"30"} inline={false} className={styles.arrow}/>*/}
                <a className={styles.logo} href={'#top'}><Image src={logo} height={46} width={87} alt={'Dave Aigbe Logo'}/></a>
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
