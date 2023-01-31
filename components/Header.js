import styles from "../styles/Header.module.css";
import Link from "next/link";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Link href="./">
          <img className={styles.logo} src="toyota-logo.png" height="38" />
        </Link>
      </div>

      <div className={styles.menu}>
        <Link href="./" >
          <p className={styles.headerItem} onClick={() => console.log("prius")}>Prius Prime</p>
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

        <Menu
          right
          isOpen={menuOpen}
          className={styles.burgerMenu}
          customBurgerIcon={<><MenuIcon /></>}
          customCrossIcon={<CloseIcon className={styles.closeIcon} />}
        >
          <Link href="./">
            <p className={styles.burgerMenuItem}>Prius Prime</p>
          </Link>
          <Link href="./">
            <p className={styles.burgerMenuItem}>Rav4</p>
          </Link>
          <Link href="./">
            <p className={styles.burgerMenuItem}>Tacoma</p>
          </Link>
          <Link href="./">
            <p className={styles.burgerMenuItem}>Civic-R</p>
          </Link>
        </Menu>
      </div>
    </div>
  );
}
