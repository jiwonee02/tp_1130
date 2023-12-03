import styles from "./footer.module.css";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_copy}>
                <span className={styles.ft_text}>Copyright</span>
                <span className={styles.ft_text}>© Han Ji Won.</span>
                <span className={styles.ft_text}>All Rights Reserved.</span>
            </div>
            <div className={styles.footer_contact}>
                <div className={styles.ft_info}>
                    <span className={styles.ft_title}>Call</span>
                    <span className={styles.ft_text}>010-3788-9576</span>
                </div>
                <div className={styles.ft_info}>
                    <span className={styles.ft_title}>Email</span>
                    <span className={styles.ft_text}>
                        jiwonee@duksung.ac.kr
                    </span>
                </div>
                <div className={styles.ft_info}>
                    <span className={styles.ft_title}>GitHub & Velog</span>
                    <div className={styles.ft_icon}>
                        <a
                            onClick={() =>
                                window.open("https://github.com/jiwonee02")
                            }
                        >
                            <FaGithub color="#888" />
                        </a>
                        <a
                            onClick={() =>
                                window.open("https://velog.io/@jiwonee02")
                            }
                        >
                            <SiVelog color="#888" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
