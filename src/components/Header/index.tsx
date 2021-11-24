import styles from './styles.module.scss'
import Link from 'next/link'
export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a> <img src="/logo.svg" alt="Logo de doug.pen" /> </a>
        </Link> 
      </div>
    </header>
  )
}