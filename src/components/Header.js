import { Link } from "react-router-dom";
import styles from "./header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <h2 className={styles.hd_title}>JIWONEE02</h2>
                <span className={styles.hd_text}>Front-end Developer</span>
            </div>
            <div className={styles.header_menu}>
                <Link to="/aboutme" className={styles.hd_link}>
                    ABOUT ME
                </Link>
                <Link to="/project" className={styles.hd_link}>
                    PROJECT
                </Link>
                <Link to="/contact" className={styles.hd_link}>
                    CONTACT
                </Link>
            </div>
        </div>
    );
}

export default Header;
