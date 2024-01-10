import Search from "../components/Search";
import styles from "./Chat.module.css"

function Person({profile}) {
    return (
        <div className={styles.container}>
            <div className={styles.person}>
                <div className={styles.mContainer}>
                    <div className={styles.profileImg}></div>
                    <div className={styles.smContainer}>
                        <span className={styles.profileName}>{profile.name}</span>
                        <span className={styles.lastRecord}>{profile.lastRecord}</span>
                    </div>
                </div>
                
                <div className={styles.smContainer}>
                    <span className={styles.lastTime}>{profile.lastTime}</span>
                    <div className={styles.count}>{profile.count}</div> 
                </div>
                
            </div>
            
        </div>
    )
}

function Chat() {
    return (
        <div className="chatTab">
            <Search  />
            <Person profile={{name: "Brian", lastRecord: "Hello? How are you? I'm fine thank you!", lastTime: "2:00", count: 1}}/>
        </div>
    )
}

export default Chat;