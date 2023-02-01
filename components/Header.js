import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { slide as Menu } from "react-burger-menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // determines whether burger menu is open or not

  return (
    <div className={styles.main}>
      {/* LEFT PART OF THE HEADER */}
      <div className={styles.left}>
        <Link href="./">
          <img className={styles.logo} src="toyota-logo.png" height="38" />
        </Link>
      </div>

      {/* CENTRAL PART OF THE HEADER */}
      <div className={styles.center}>
        <Link href="#prius">
          <p className={styles.headerItem} >Prius Prime</p>
        </Link>
        <Link href="#supra">
          <p className={styles.headerItem}>Supra</p>
        </Link>
        <Link href="#highlander">
          <p className={styles.headerItem}>Highlander</p>
        </Link>
        <Link href="#bz4x">
          <p className={styles.headerItem}>bZ4X</p>
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
              style={{ transition: "0.25s", color: "#1f1f1f" }} // time it takes for the icon to turn red on hover
            />
          </div>
          <Link href="#prius">
            <p className={styles.burgerMenuItem}>Prius Prime</p>
          </Link>
          <Link href="#supra">
            <p className={styles.burgerMenuItem}>Supra</p>
          </Link>
          <Link href="#highlander">
            <p className={styles.burgerMenuItem}>Highlander</p>
          </Link>
          <Link href="#bz4x">
            <p className={styles.burgerMenuItem}>bZ4X</p>
          </Link>
        </Menu>
      </div>
    </div>
  );
}
