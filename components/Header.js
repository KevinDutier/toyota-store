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
          <img className={styles.logo} src="toyota-logo.png" />
        </Link>
      </div>

      {/* CENTRAL PART OF THE HEADER */}
      <div className={styles.center}>
        <Link href="./model?param=Prius">
          <p className={styles.headerItem} >Prius</p>
        </Link>
        <Link href="./model?param=Supra">
          <p className={styles.headerItem}>Supra</p>
        </Link>
        <Link href="./model?param=C-HR">
          <p className={styles.headerItem}>C-HR</p>
        </Link>
        <Link href="./model?param=Highlander">
          <p className={styles.headerItem}>Highlander</p>
        </Link>
      </div>

      {/* RIGHT SECTION OF THE HEADER */}
      <div className={styles.right}>
        <Link href="./">
          <p className={styles.headerItem}>Toyota Account</p>
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
          <Link href="./model?param=Prius">
            <p className={styles.burgerMenuItem}>Prius</p>
          </Link>
          <Link href="./model?param=Supra">
            <p className={styles.burgerMenuItem}>Supra</p>
          </Link>
          <Link href="./model?param=C-HR">
            <p className={styles.burgerMenuItem}>C-HR</p>
          </Link>
          <Link href="./model?param=Highlander">
            <p className={styles.burgerMenuItem}>Highlander</p>
          </Link>
        </Menu>
      </div>
    </div>
  );
}
