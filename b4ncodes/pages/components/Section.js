import styles from '../../styles/Home.module.css'


const Section =({children})=>{

    return(
        <section className={styles.grid}>
            {children}
        </section>
    )
}

export default Section;