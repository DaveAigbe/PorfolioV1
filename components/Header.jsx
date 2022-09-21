import styles from './component_styles/Header.module.css';
import Image from 'next/image';
import {useContext, useEffect, useState} from 'react';
import {Icon} from '@iconify/react';
import Link from 'next/link';
import {Context} from './context/Context';


const menuClick = () => {
    const menu_links = document.getElementById('menu__links');
    const navBar = document.getElementById('navbar');

    if (menu_links.style.display === 'none') {
        menu_links.style.display = 'flex';
        // navBar.style.boxShadow = '2px 4px 16px rgb(0, 0, 0)'
    } else {
        menu_links.style.display = 'none';
        // navBar.style.boxShadow = '2px 4px 16px rgb(0, 0, 0.2)'
    }
};

const MenuIcon = ({toggle}) => {
    return (
        <>
            {toggle === false ?
                (
                    <Icon className={styles.menu__icon} icon="line-md:menu" color="white" width={90}/>
                    // <Icon className={styles.menu__icon} icon="ci:menu-alt-01" color="white" width={90}/>
                )
                :
                (
                    <Icon className={styles.menu__icon} icon="cil:x" color="white" width="90"/>
                )
            }
        </>
    );
};

const Header = () => {
    const [context] = useContext(Context);
    const [active, setActive] = useState(false);

    const logo = `https:${context.logo}`;
    const navListData = context.navBar.navList;
    const resumeData = context.navBar.resume;

    const changeMenu = () => {
        if (!active) {
            setActive(true);
        } else {
            setActive(false);
        }
    };

    useEffect(() => {
        const navbar = document.getElementById('navbar');
        let prevScrollPos = window.scrollY;

        window.onscroll = function () {
            let currentScrollPos = window.scrollY;
            if (prevScrollPos > currentScrollPos) {
                navbar.style.top = '0';
            } else {
                navbar.style.top = '-100px';
            }
            prevScrollPos = currentScrollPos;
        };
    });

    return (
        <header>
            <nav className={styles.navbar} id={'navbar'}>
                <div className={styles.image_container}>
                    <Image src={logo} height={60} width={120} layout={'responsive'} alt={'Dave Aigbe Logo'} priority/>
                </div>
                <ul className={styles.nav__links}>
                    {navListData.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a className={styles.link} href={item.link}>{item.title}</a>
                                </li>
                            );
                        }
                    )}
                </ul>
                <div className={styles.nav__resume}>
                    <Link href={resumeData.link}>
                        {resumeData.title}
                    </Link>
                </div>
                <button onClick={() => {
                    menuClick();
                    changeMenu();
                }} className={styles.menu__button}>
                    <MenuIcon toggle={active}/>
                </button>
            </nav>
            <ul className={styles.menu__links} id={'menu__links'} style={{display: 'none'}}>
                {navListData.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.link}>{item.title}</a>
                                <hr/>
                            </li>
                        );
                    }
                )}
                <li>
                    <Link href={resumeData.link}>
                        {resumeData.title}
                    </Link>
                    <hr/>
                </li>
            </ul>
        </header>
    );
};

export default Header;
