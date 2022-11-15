import { Link } from "react-router-dom"
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link to='/' className={styles.link}>Home</Link>
        </li>
        <li>
          <Link to='/about' className={styles.link}>About</Link>
        </li>
        <li>
          <Link to='/projects' className={styles.link}>Projects</Link>
        </li>
        <li>
          <Link to='/resume' className={styles.link}>Resume</Link>
        </li>
        <li>
          <Link to='/contact' className={styles.link}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar