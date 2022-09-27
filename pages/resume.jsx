import React from 'react';
import Image from 'next/image';
import styles from '../styles/Resume.module.css';
import * as contentful from 'contentful';
import AltLayout from '../components/AltLayout';

const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function Resume({data}) {
    const resumeUrl = data.resume.img.fields['file']['url'];
    const resumeImg = `https:${resumeUrl}`;

    const resumeData = data.resume;

    return (
        <AltLayout data={data} className={styles.container}>
            <section className={styles.main}>
                <header>
                    <h1 className={styles.title}>My <span className={styles.title_focus}>Resume</span></h1>
                </header>
                <a className={styles.link_container} href={resumeData.link} target={'_blank'} rel={'noreferrer'}>
                    <Image className={styles.image} src={resumeImg} width={897} height={1162} alt={'picture of resume'}/>
                </a>
            </section>
        </AltLayout>
    );
};


export async function getStaticProps() {
    const logo = await client.getEntry('2Wc3ck93e9dz1Yxpp2GR0e');
    const resume = await client.getEntry('4WAlPuD3WSsn4EsIUdla2p');
    console.log();

    return {
        props: {
            data: {
                logo: logo.fields.img.fields['file']['url'],
                resume: resume.fields,
            }
        },
    };
}


