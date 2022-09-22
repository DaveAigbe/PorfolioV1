import React from 'react';
import Footer from '../components/Footer';
import * as contentful from 'contentful';
import styles from '../styles/Board.module.css';


const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function MyComponent({data}) {
    const boardData = data.board;

    return (
        <div className={styles.container}>
            <header>
                <h1 className={styles.title}>My <span className={styles.title_focus}>Board</span></h1>
            </header>
            <iframe className={styles.board} src={boardData.link} width={'90%'} height={'80%'}></iframe>
            <div className={styles.footer__container}>
                <Footer context={data}/>
            </div>
        </div>
    );
};


export async function getStaticProps() {
    const logo = await client.getEntry('2Wc3ck93e9dz1Yxpp2GR0e');
    const board = await client.getEntry('OtiCNaFmgXcuR949hmYDg');
    console.log();

    return {
        props: {
            data: {
                board: board.fields,
                logo: logo.fields.img.fields['file']['url'],
            }
        },
    };
}


