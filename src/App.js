import Footer from "./components/Footer"


//tabs
import Chat from "./tabs/Chat";
import Group from "./tabs/Group";
import Profile from "./tabs/Profile";
import Setting from "./tabs/Setting";

import styles from "./App.module.css"
import { useState } from "react";

function App() {

  const [tab, setTab] = useState("Chat");

  const onTabChange = (event) => {
    setTab(event.target.alt ? event.target.alt : event.target.children[0].alt)
  }

  return (
    <div>
      <h1 className={styles.title}>{tab}</h1>
      {tab === "Chat" ? <Chat /> : null}
      {tab === "Group" ? <Group /> : null}
      {tab === "Profile" ? <Profile /> : null}
      {tab === "Setting" ? <Setting /> : null}
      <Footer onClick={onTabChange} />
    </div>
  );
}

export default App;
