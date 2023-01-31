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
      {/* LEFT PART OF THE HEADER */}
      <div className={styles.left}>
        <Link href="./">
          <img className={styles.logo} src="toyota-logo.png" height="38" />
        </Link>
      </div>

      {/* CENTER PART OF THE HEADER */}
      <div className={styles.center}>
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

      {/* RIGHT SECTION OF THE HEADER */}
      <div className={styles.right}>
        <Link href="./">
          <p className={styles.headerItem}>Toyota account</p>
        </Link>

        {/* burger menu icon */}
        <MenuIcon
          onClick={() => setMenuOpen(true)}
          className={styles.headerItem}
          style={{ transition: "0.25s" }} // time it takes for the icon to turn red on hover
        />

        {/* burger menu content (all the links and the Menu tag) */}
        <Menu
          right
          isOpen={menuOpen}
          className={styles.burgerMenu}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <div className={styles.closeIconContainer}>
            <CloseIcon
              onClick={() => setMenuOpen(false)}
              className={styles.headerItem}
              style={{ transition: "0.25s" }} // time it takes for the icon to turn red on hover
            />
          </div>
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
