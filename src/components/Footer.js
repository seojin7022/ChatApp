import styles from "./Footer.module.css"
import { Link } from "react-router-dom";

function Footer({onClick}) {
    return (
        <footer className={styles.box}>
            <Link to="/ChatApp" className={styles.footerBtn} onClick={onClick}>
                <img src="/ChatApp/Chat.svg" alt="Chat"></img>
            </Link>
        
            <Link to="/ChatApp" className={styles.footerBtn} onClick={onClick}>
                <img src="/ChatApp/Group.svg" alt="Group"></img>
            </Link>
            <Link to="/ChatApp" className={styles.footerBtn} onClick={onClick}>
                <img src="/ChatApp/Profile.svg" alt="Profile"></img>
            </Link>
            <Link to="/ChatApp" className={styles.footerBtn} onClick={onClick}>
                <img src="/ChatApp/Setting.svg" alt="Setting"></img>
            </Link>
            
        </footer>
    )
}

export default Footer;