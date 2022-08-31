import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({children, home}) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Image src={'/../public/images/my_logo.png'} height={130} width={180}/>
                <nav>
                    <ul className={styles.nav__links}>
                        <li><a href={'#projects'}>Projects</a></li>
                        <li><a href={'#skills'}>Skills</a></li>
                        <li><a href={'#about'}>About</a></li>
                        <li><a href={'#contact'}>Contact</a></li>
                    </ul>
                </nav>
                <a className={styles.nav__resume} href={'#resume'} id="#resume">Resume</a>
            </header>
            <main>{children}</main>
            <footer>
                {!home && (
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

export default Layout;
