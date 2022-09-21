import React from 'react';
import Footer from '../components/Footer';
import * as contentful from 'contentful';
import styles from '../styles/Board.module.css'


const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});


export default function MyComponent({data}) {
    return (
        <div className={styles.container}>
            <iframe className={styles.board} src={'https://trello.com/b/zwudKuMR.html'} width={'80%'} height={'80%'}></iframe>
            <Footer context={data}/>
        </div>
    );
};


export async function getStaticProps() {
    const logo = await client.getEntry('2Wc3ck93e9dz1Yxpp2GR0e');
    console.log();

    return {
        props: {
            data: {
                logo: logo.fields.img.fields['file']['url'],
            }
        },
    };
}


