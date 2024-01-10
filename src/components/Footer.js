import styles from "./Footer.module.css"

function Footer({onClick}) {
    return (
        <footer className={styles.box}>
            <button className={styles.footerBtn} onClick={onClick}>
                <img src="/ChatApp/Chat.svg" alt="Chat"></img>
            </button>
            <button className={styles.footerBtn} onClick={onClick}>
                <img src="/ChatApp/Group.svg" alt="Group"></img>
            </button>
            <button className={styles.footerBtn} onClick={onClick}>
                <img src="/ChatApp/Profile.svg" alt="Profile"></img>
            </button>
            <button className={styles.footerBtn} onClick={onClick}>
                <img src="/ChatApp/Setting.svg" alt="Setting"></img>
            </button>
        </footer>
    )
}

export default Footer;