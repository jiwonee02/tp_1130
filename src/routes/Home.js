import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { AiFillRightCircle } from "react-icons/ai";

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.home_body}>
                <h1 className={styles.h_title}>
                    Welcome to my Page!<br></br>I'm Jiwon Han.
                </h1>
                <img className={styles.h_img} src="img/ocean.avif"></img>
            </div>
            <div className={styles.home_menu}>
                <Link to="/aboutme" className={styles.h_link}>
                    ABOUT ME
                    <br></br>
                    <span className={styles.h_text}>
                        <AiFillRightCircle />
                    </span>
                </Link>
                <Link to="/project" className={styles.h_link}>
                    PROJECT
                    <br></br>
                    <span className={styles.h_text}>
                        <AiFillRightCircle />
                    </span>
                </Link>
                <Link to="/contact" className={styles.h_link}>
                    CONTACT
                    <br></br>
                    <span className={styles.h_text}>
                        <AiFillRightCircle />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Home;
