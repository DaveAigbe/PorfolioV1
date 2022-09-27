import React from 'react';
import styles from './component_styles/Footer.module.css';
import Image from 'next/image';


const Footer = ({context, homePage}) => {

    const logo = `https:${context.logo}`;

    return (
        <div>
            <footer className={styles.footer}>
                {!homePage ?
                    (
                        <React.Fragment className={styles.home_container}>
                            <Image src={logo} height={46} width={87} alt={'Dave Aigbe Logo'}/>
                        </React.Fragment>
                    )
                    :
                    (

                        <React.Fragment className={styles.home_container}>
                            <p>&uarr;</p>
                            <a href={'#top'}><Image src={logo} height={46} width={87} alt={'Dave Aigbe Logo'}/></a>
                        </React.Fragment>
                    )
                }
            </footer>
        </div>
    );
};

export default Footer;
