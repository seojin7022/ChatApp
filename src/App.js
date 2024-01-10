import Footer from "./components/Footer"


//tabs
import Chat from "./tabs/Chat";
import Group from "./tabs/Group";
import Profile from "./tabs/Profile";
import Setting from "./tabs/Setting";

import Chatting from "./Chatting";

import styles from "./App.module.css"
import { useState } from "react";

function App() {

  const [tab, setTab] = useState("Chat");
  const [chatting, setChatting] = useState(false);

  const onTabChange = (event) => {
    setTab(event.target.alt ? event.target.alt : event.target.children[0].alt)
    setChatting(false);
  }

  const onProfileClick = (event) => {
    console.log(event.currentTarget.id);
    setChatting(true);
    setTab(null);
  }

  return (
    <div>
      <h1 className={styles.title}>{tab}</h1>
      {tab === "Chat" ? <Chat onProfileClick={onProfileClick} /> : null}
      {tab === "Group" ? <Group /> : null}
      {tab === "Profile" ? <Profile /> : null}
      {tab === "Setting" ? <Setting /> : null}
      {chatting ? <Chatting profile={{ name: "Brian" }} /> : null}
      <Footer onClick={onTabChange} />
    </div>
  )
}

export default App;
