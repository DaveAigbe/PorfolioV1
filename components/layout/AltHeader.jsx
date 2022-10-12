import React from 'react';
import styles from '../component_styles/HeaderAlt.module.css';
import Image from 'next/image';
import Link from 'next/link';

const AltHeader = ({data}) => {

    const logo = `https:${data.logo}`;

    return (
        <nav className={styles.navbar}>
            <div className={styles.image_container}>
                <Image src={logo} height={60} width={120} layout={'responsive'} alt={'Dave Aigbe Logo'} priority/>
            </div>
            <Link href={'/'}>
                <a tabIndex={0} className={styles.link}>&larr; Back</a>
            </Link>
        </nav>
    );
};

export default AltHeader;
