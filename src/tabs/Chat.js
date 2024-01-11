import Search from "../components/Search";
import styles from "./Chat.module.css"

import { Link } from "react-router-dom";

function Person({ profiles }) {
    return (
        <div className={styles.container}>
            {profiles.map((profile) => {
                return (
                    <Link key={profile.id} to={`/ChatApp/chat/${profile.id}`}>
                        <div  id={profile.id} className={styles.person}>
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
                    </Link>
                    
                )
                
                
            
        })}
        </div>
        
        
    )
}

function Chat() {
    return (
        <div className="chatTab">
            <Search  />
            <Person profiles={[{ id: 1, name: "Brian", lastRecord: "Hello? How are you? I'm fine thank you!", lastTime: "2:00", count: 1 },
                { id: 2, name: "HEHE", lastRecord: "Good Bye!", lastTime: "4:00", count: 1 },
                { id: 3, name: "Seojin", lastRecord: "Do work!", lastTime: "1:00", count: 5 },
                { id: 4, name: "Brian", lastRecord: "Hello? How are you? I'm fine thank you!", lastTime: "2:00", count: 1 },
                { id: 5, name: "Brian", lastRecord: "Hello? How are you? I'm fine thank you!", lastTime: "2:00", count: 1 }]} />
        </div>
    )
}

export default Chat;