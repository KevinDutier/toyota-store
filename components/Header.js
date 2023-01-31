import styles from "../styles/Header.module.css";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Link href="./">
          <img className={styles.logo} src="toyota-logo.png" height="38" />
        </Link>
      </div>

      <div className={styles.menu}>
        <Link href="./">
            <p className={styles.headerItem}>Prius Prime</p>
        </Link>
        <Link href="./">
            <p className={styles.headerItem}>Rav4</p>
        </Link>
        <Link href="./">
            <p className={styles.headerItem}>Tacoma</p>
        </Link>
        <Link href="./">
            <p className={styles.headerItem}>Civic-R</p>
        </Link>
      </div>

      
      <div className={styles.right}>
        <Link href="./">
          <p className={styles.headerItem}>Toyota account</p>
        </Link>
        <MenuIcon>

        </MenuIcon>
      </div>
    </div>
  );
}
