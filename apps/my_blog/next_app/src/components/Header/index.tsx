import styles from './styles.module.scss'
import { SignIn } from '../SignIn'

export function Header(){
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img className={styles.logo} src="./images/logo.png" alt="My Blog" />
          <span>my_blog</span>
        </div>
        <nav>
          <a className={styles.active} href="#">Home</a>
          <a href="#">Posts</a>
        </nav>
        <SignIn/>
      </div>
    </header>
  )
}
