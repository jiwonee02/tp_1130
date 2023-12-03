import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import styles from "./project.module.css";

function Project() {
    const tp = [
        {
            name: "자기소개페이지",
            skill: "react",
            content:
                "자기소개 웹 페이지를 리액트로 만들어보았습니다. 리액트로 만든 첫번째 미니 프로젝트라 많이 엉성하네요. 더 열심히 공부해서 멋진 리액트 웹 페이지를 만들고 싶습니다.",
            image: "img/test.png",
        },
    ];
    return (
        <div>
            <Header />
            <div className={styles.project}>
                <h1 className={styles.pj_title}>Project</h1>
                <Projects projects={tp} />
            </div>
            <Footer />
        </div>
    );
}

export default Project;
