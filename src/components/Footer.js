import styles from "./Footer.module.css"

function Footer({onClick}) {
    return (
        <footer className={styles.box}>
            <button className={styles.footerBtn} onClick={onClick}>
                <img src="Chat.svg" alt="Chat"></img>
            </button>
            <button className={styles.footerBtn} onClick={onClick}>
                <img src="Group.svg" alt="Group"></img>
            </button>
            <button className={styles.footerBtn} onClick={onClick}>
                <img src="Profile.svg" alt="Profile"></img>
            </button>
            <button className={styles.footerBtn} onClick={onClick}>
                <img src="Setting.svg" alt="Setting"></img>
            </button>
        </footer>
    )
}

export default Footer;