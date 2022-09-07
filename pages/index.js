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
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function Home({projects}) {
    return (
        <Layout home>
            <Head>
                <title>Dave Aigbe | CS Student</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/logoicon.ico"/>
            </Head>
            <main className={styles.container}>
                <section className={styles.core}>
                    {/*HERO*/}
                    <Hero/>

                    <hr className={styles.divider} id={'projects'}/>
                    {/*PROJECT LIST*/}
                    <Projects projectsObj={projects}/>

                    <hr className={styles.divider} id={'skills'}/>
                    {/*SKILL LISTING*/}
                    <Skills/>

                    <hr className={styles.divider} id={'about'}/>
                    {/*ABOUT ME*/}
                    <About/>

                    <hr className={styles.divider} id={'contact'}/>
                    {/*CONTACT BTNS & FORM*/}
                    <Contact/>
                    <EmailForm/>
                </section>
            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    // Get data from headless cms
    const product = await client.getEntry('2Gtu58YRArEBlEVMHIFZid');
    console.log(product.fields.allprojects)

    return {
        props: {
            projects: product.fields.allprojects,
        },
    };
}
