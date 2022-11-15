import Image from '../assets/myPhoto.jpg'
import styles from './Home.module.css'

function Home() {

  return (
    <div className={styles.body}>
      <h1>Zain Ahmed</h1>
      <img src={Image} alt='Zain Ahmed'/>
      <p>Software Engineer</p>
    </div>
  )
}

export default Home