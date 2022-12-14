import React from 'react';
import * as contentful from 'contentful';
import styles from '../styles/Board.module.css';
import AltLayout from '../components/layout/AltLayout';
import {motion} from 'framer-motion';


const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

export default function MyComponent({data}) {
    const boardData = data.board;

    return (
        <AltLayout data={data}>
            <motion.div
                initial={{y: 25, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{
                    duration: 0.75,
                    delay: 0.4,
                }}
            >
                <div className={styles.container}>
                    <header>
                        <h1 className={styles.title}>My <span className={styles.title_focus}>Board</span></h1>
                    </header>
                    <iframe className={styles.board} src={boardData.link} width={'90%'} height={'80%'}></iframe>
                </div>
            </motion.div>
        </AltLayout>
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


