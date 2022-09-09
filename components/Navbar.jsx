import styles from './component_styles/Navbar.module.css'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div>
            <header className={styles.navbar} id={'navbar'}>
                <Image className={styles.logo} src={'/images/my_logo-nobg.png'} height={120} width={170} alt={'Dave Aigbe Logo'}/>
                <nav>
                    <ul className={styles.nav__links}>
                        <li><a href={'#projects'}>Projects</a></li>
                        <li><a href={'#skills'}>Skills</a></li>
                        <li><a href={'#about'}>About</a></li>
                        <li><a href={'#contact'}>Contact</a></li>
                    </ul>
                </nav>
                <a className={styles.nav__resume}
                   href={'https://docs.google.com/document/d/1apWZTYKOL4UszjU41XcSyal2X9Am7S23/edit?usp=sharing&ouid=105877498449267879603&rtpof=true&sd=true'}
                   target={'_blank'} rel={'noreferrer'}>Resume</a>
            </header>
        </div>
    );
};

export default Navbar;
