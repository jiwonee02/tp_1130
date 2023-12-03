import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./aboutme.module.css";
import { AiFillTool } from "react-icons/ai";

function Aboutme() {
    return (
        <div>
            <Header />
            <div className={styles.aboutme}>
                <div className={styles.aboutme_intro}>
                    <div className={styles.at_info}>
                        <h1 className={styles.at_title}>Hello!</h1>
                        <span className={styles.at_text}>
                            프론트엔드 개발자가 되기 위해 열심히 노력하는
                            한지원입니다.
                        </span>
                    </div>
                    <div className={styles.at_info}>
                        <h2 className={styles.at_title}>
                            Skill
                            <AiFillTool
                                className={styles.at_icon}
                                color="#0047ab"
                            />
                        </h2>
                        <span className={styles.at_skill}>HTML</span>
                        <span className={styles.at_skill}>CSS</span>
                        <span className={styles.at_skill}>JavaScript</span>
                        <span className={styles.at_skill}>React</span>
                    </div>
                </div>
                <div className={styles.aboutme_image}></div>
            </div>
            <Footer />
        </div>
    );
}

export default Aboutme;
