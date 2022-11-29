import styles from '../../component_styles/sections/Projects/Card.module.css';
import Image from 'next/image';

export const Card = ({project}) => {
    return (
        <div className={styles.container}>
            <div className={styles.thumbnail}>
                <Image src={'/images/transparent-yummy_thumbnail.png'} width={1303} height={1303} layout={'responsive'} />
            </div>
            <section className={styles.links}>
                <a href={project.live} target={'_blank'} rel={'noreferrer'}>Live</a>
                <a href={project.link} target={'_blank'} rel={'noreferrer'}>Github</a>
            </section>
        </div>
    );
};
