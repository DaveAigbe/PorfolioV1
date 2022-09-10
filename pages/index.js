import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/Layout';
import EmailForm from '../components/EmailForm';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import * as contentful from 'contentful';

const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export default function Home({logo, navBar, hero, projects, skills, about, contact}) {
    return (
        <Layout navObj={navBar} logoUrl={logo} home>
            <Head>
                <title>Dave Aigbe | CS Student</title>
                <meta name="description" content="Personal Portfolio"/>
                <link rel="icon" href="/logoicon.ico"/>
            </Head>
            <main className={styles.container}>
                <section className={styles.core}>
                    {/*HERO*/}
                    <Hero heroObj={hero}/>

                    <hr className={styles.divider} id={'projects'}/>
                    {/*PROJECT LIST*/}
                    <Projects projectsObj={projects}/>

                    <hr className={styles.divider} id={'skills'}/>
                    {/*SKILL LISTING*/}
                    <Skills skillsObj={skills}/>

                    <hr className={styles.divider} id={'about'}/>
                    {/*ABOUT ME*/}
                    <About aboutObj={about}/>

                    <hr className={styles.divider} id={'contact'}/>
                    {/*CONTACT BTNS & FORM*/}
                    <Contact contactObj={contact}/>
                    <EmailForm/>
                </section>
            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    // Get data from headless cms
    const logo = await client.getEntry('2Wc3ck93e9dz1Yxpp2GR0e')
    const navBar = await client.getEntry('43dOPbWS6mSfo3fiFM4dZO');
    const hero = await client.getEntry('6unY6sx06cuqsJztkA9wJi');
    const projects = await client.getEntry('2Gtu58YRArEBlEVMHIFZid');
    const skills = await client.getEntry('6oKHCE7i2h5sC0LlPgKrrk');
    const about =  await client.getEntry('7H1t2GalPLV5sWPEsLBGAs');
    const contact = await client.getEntry('736safyd7Ju5dGYqcdaJnO');
    console.log()

    return {
        props: {
            logo: logo.fields.img.fields['file']['url'],
            navBar: navBar.fields,
            hero: hero.fields,
            projects: projects.fields.allprojects,
            skills: skills.fields.icons,
            about: about.fields.description,
            contact: contact.fields.information
        },
    };
}
