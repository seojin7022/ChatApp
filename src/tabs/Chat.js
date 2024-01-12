import Search from "../components/Search";
import styles from "./Chat.module.css"

import { Link } from "react-router-dom";

function Person({ profiles }) {
    return (
        <div className={styles.container}>
            {profiles.map((profile) => {
                return (
                    <Link key={profile.id} to={`/chat/${profile.id}`}>
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
            <Person profiles={[{ id: 1, name: "Woman", lastRecord: "Hello?", lastTime: "12:05", count: 1 },
                { id: 2, name: "Test", lastRecord: "Good Bye!", lastTime: "4:06", count: 2 },
                { id: 3, name: "Seojin7022", lastRecord: "...", lastTime: "8:10", count: 5 },
                { id: 4, name: "seojin702", lastRecord: "call me", lastTime: "22:09", count: 9 },
                { id: 5, name: "Man", lastRecord: "Zzzz", lastTime: "2:02", count: 55 }]} />
        </div>
    )
}

export default Chat;