import React, {Fragment} from 'react';
import styles from '../component_styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Footer = ({context, homePage}) => {

    const logo = `https:${context.logo}`;

    return (
            <footer className={styles.footer}>
                {!homePage ?
                    (
                        <Fragment>
                            <Link href={'/'} >
                                <Image className={styles.toHome} src={logo} height={46} width={87} alt={'Dave Aigbe Logo'}/>
                            </Link>
                        </Fragment>
                    )
                    :
                    (

                        <Fragment>
                            <p>&uarr;</p>
                            <a tabIndex={0} href={'#top'}><Image src={logo} height={46} width={87} alt={'Dave Aigbe Logo'}/></a>
                        </Fragment>
                    )
                }
            </footer>
    );
};

export default Footer;
