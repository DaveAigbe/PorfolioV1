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
import {useState} from 'react';
import {Context} from '../components/context/Context';

const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export default function Home({data}) {
    const [context, setContext] = useState(data);

    return (
        <Context.Provider value={[context, setContext]}>
            <Layout context={data} home>
                <Head>
                    <title>Dave Aigbe | CS Student</title>
                    <meta name="description" content="Personal Portfolio"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
                    <link rel="icon" href="/logoicon.ico"/>
                </Head>
                <main className={styles.container}>
                    <section className={styles.core}>
                        {/*HERO*/}
                        <Hero/>

                        <hr className={styles.divider} id={'projects'}/>
                        {/*PROJECT LIST*/}
                        <Projects/>

                        <hr className={styles.divider} id={'skills'}/>
                        {/*SKILL LIST*/}
                        <Skills/>

                        <hr className={styles.divider} id={'about'}/>
                        {/*ABOUT ME*/}
                        <About/>

                        <hr className={styles.divider} id={'contact'}/>
                        {/*CONTACT BUTTONS & EMAIL FORM*/}
                        <Contact/>
                        <EmailForm/>
                    </section>
                </main>
            </Layout>
        </Context.Provider>
    );
}

export async function getStaticProps() {
    // Get data from headless cms
    const logo = await client.getEntry('2Wc3ck93e9dz1Yxpp2GR0e');
    const navBar = await client.getEntry('43dOPbWS6mSfo3fiFM4dZO');
    const hero = await client.getEntry('6unY6sx06cuqsJztkA9wJi');
    const projects = await client.getEntry('2Gtu58YRArEBlEVMHIFZid');
    const skills = await client.getEntry('6oKHCE7i2h5sC0LlPgKrrk');
    const about = await client.getEntry('7H1t2GalPLV5sWPEsLBGAs');
    const contact = await client.getEntry('736safyd7Ju5dGYqcdaJnO');
    console.log();

    return {
        props: {
            data:  {
                logo: logo.fields.img.fields['file']['url'],
                navBar: navBar.fields,
                hero: hero.fields,
                projects: projects.fields.allprojects,
                skills: skills.fields.icons,
                about: about.fields.description,
                contact: contact.fields.information,
            }
        },
    };
}
