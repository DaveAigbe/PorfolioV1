import styles from './component_styles/Layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Layout = ({children, home}) => {
    return (
        <section className={styles.container}>
            <header className={styles.header} id={'top'}>
                <Image className={styles.logo} src={'/images/my_logo.png'} height={120} width={170} alt={'Dave Aigbe Logo'}/>
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
                   target={'_blank'} rel={"noreferrer"}>Resume</a>
            </header>
            <main>{children}</main>
            <footer className={styles.footer}>
                <a href={'#top'}><Image src={'/images/my_logo.png'} height={90} width={120} /></a>
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">
                            <a>← Back to home</a>
                        </Link>
                    </div>
                )}
            </footer>
        </section>
    );
};

export default Layout;
