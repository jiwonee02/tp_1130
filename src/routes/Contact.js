import { useState, useEffect, useRef } from "react";
import Clock from "react-live-clock";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

function Contact() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [chat, setChat] = useState([]);
    const chatContainerRef = useRef(null);
    const onChange = (event) => setName(event.target.value);
    const onChange02 = (event) => setText(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (text === "" && name === "") {
            return;
        }
        setChat((currentArray) => [{ name, text }, ...currentArray]);
        setText("");
        setName("");
    };

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [chat]);

    return (
        <div>
            <Header />
            <div className={styles.contact}>
                <h1 className={styles.ct_title}>Contact</h1>
                <div className={styles.contact_container}>
                    <div className={styles.contact_write}>
                        <h3 className={styles.ct_subtitle}>연락주세요:D</h3>
                        <form onSubmit={onSubmit}>
                            <input
                                className={styles.ct_name02}
                                onChange={onChange}
                                value={name}
                                type="text"
                                placeholder="이름"
                            ></input>
                            <input
                                className={styles.ct_text02}
                                onChange={onChange02}
                                value={text}
                                type="text"
                                placeholder="내용을 입력하세요"
                            ></input>
                            <button>전송</button>
                        </form>
                    </div>

                    <div
                        className={styles.contact_board}
                        ref={chatContainerRef}
                    >
                        <ul className={styles.ct_chat}>
                            {chat
                                .slice(0)
                                .reverse()
                                .map((item, index) => (
                                    <li key={index}>
                                        <span className={styles.ct_name}>
                                            {item.name}
                                        </span>
                                        <span className={styles.ct_text}>
                                            {item.text}
                                        </span>
                                        <span className={styles.ct_time}>
                                            <Clock
                                                format={"YYYY-MM-DD"}
                                                ticking={false}
                                                timezone={"Asia/Seoul"}
                                            />
                                        </span>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
