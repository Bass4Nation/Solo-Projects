import styles from '../../styles/Home.module.css'


const Element = ({arr}) =>{
    console.log(arr)
    return(
        <a href={arr[0]} className={styles.card}>
        <h2>{arr[1]}&rarr;</h2>
        <p>[{arr[2]}</p>
      </a>
    )
}
export default Element;