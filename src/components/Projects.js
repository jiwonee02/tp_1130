import styles from "./projects.module.css";

const Projects = ({ projects }) => {
    return (
        <div className={styles.projects}>
            {projects.map((project, index) => (
                <div className={styles.project_info} key={index}>
                    <div className={styles.pj_blank}></div>
                    <div className={styles.pj_content}>
                        <h2 className={styles.pj_title}>{project.name}</h2>
                        <span className={styles.pj_skill}>{project.skill}</span>
                        <span className={styles.pj_text}>
                            {project.content.length > 235
                                ? `${project.content.slice(0, 235)}...`
                                : project.content}
                        </span>
                    </div>
                    {project.image && (
                        <img
                            className={styles.pj_image}
                            src={project.image}
                            alt={`프로젝트 ${index + 1} 이미지`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default Projects;
