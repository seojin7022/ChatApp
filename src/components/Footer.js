import styles from "./Footer.module.css"
import { Link } from "react-router-dom";

function Footer({onClick}) {
    return (
        <footer className={styles.box}>
            <Link to="/" className={styles.footerBtn} onClick={onClick}>
                <img src="/Chat.svg" alt="Chat"></img>
            </Link>
        
            <Link to="" className={styles.footerBtn} onClick={onClick}>
                <img src="/Group.svg" alt="Group"></img>
            </Link>
            <Link to="" className={styles.footerBtn} onClick={onClick}>
                <img src="/Profile.svg" alt="Profile"></img>
            </Link>
            <Link to="" className={styles.footerBtn} onClick={onClick}>
                <img src="/Setting.svg" alt="Setting"></img>
            </Link>
            
        </footer>
    )
}

export default Footer;