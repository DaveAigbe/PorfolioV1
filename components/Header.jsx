import styles from './component_styles/Header.module.css';
import Image from 'next/image';
import {useEffect} from 'react';

const Header = ({logoUrl, navObj}) => {
    const logo = `https:${logoUrl}`
    const navList = navObj.navList

    useEffect(() => {
        let prevScrollPos = window.scrollY;
        window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                document.getElementById('navbar').style.top = '0';
            } else {
                document.getElementById('navbar').style.top = '-100px';
            }
            prevScrollPos = currentScrollPos;
        };
    });

    return (
        <header>
            <nav className={styles.navbar} id={'navbar'}>
                <Image src={logo} height={60} width={120} alt={'Dave Aigbe Logo'}/>
                <ul className={styles.nav__links}>
                    {navList.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a className={styles.link} href={item.link}>{item.title}</a>
                                </li>
                            );
                        }
                    )}
                </ul>
                <a className={styles.nav__resume} href={navObj.resume.link} target={'_blank'} rel={'noreferrer'}>
                    {navObj.resume.title}
                </a>
            </nav>
        </header>
    );
};

export default Header;
