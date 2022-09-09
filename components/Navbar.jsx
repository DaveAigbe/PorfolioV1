import styles from './component_styles/Navbar.module.css';
import Image from 'next/image';
import {useEffect} from 'react';

const Navbar = () => {

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
                <Image className={styles.logo} src={'/images/my_logo-nobg-2.png'} height={60} width={120} alt={'Dave Aigbe Logo'}/>
                <ul className={styles.nav__links}>
                    <li><a href={'#projects'}>Projects</a></li>
                    <li><a href={'#skills'}>Skills</a></li>
                    <li><a href={'#about'}>About</a></li>
                    <li><a href={'#contact'}>Contact</a></li>
                </ul>
                <a className={styles.nav__resume}
                   href={'https://docs.google.com/document/d/1apWZTYKOL4UszjU41XcSyal2X9Am7S23/edit?usp=sharing&ouid=105877498449267879603&rtpof=true&sd=true'}
                   target={'_blank'} rel={'noreferrer'}>Resume</a>
            </nav>
        </header>
    );
};

export default Navbar;
