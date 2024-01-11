import Footer from "./components/Footer"


//tabs
import Chat from "./tabs/Chat";
import Group from "./tabs/Group";
import Profile from "./tabs/Profile";
import Setting from "./tabs/Setting";

import Chatting from "./Chatting";

import styles from "./App.module.css"
import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  const [tab, setTab] = useState("Chat");

  const onTabChange = (event) => {
    setTab(event.target.alt ? event.target.alt : event.target.children[0].alt);
  }

  function Home() {
    return (
      <div>
        <h1 className={styles.title}>{tab}</h1>
        {tab === "Chat" ? <Chat /> : null}
        {tab === "Group" ? <Group /> : null}
        {tab === "Profile" ? <Profile /> : null}
        {tab === "Setting" ? <Setting /> : null}
        
        
      </div>
    )
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/ChatApp" element={<Home />}>
            
          </Route>
          <Route path="/ChatApp/chat/:id" element={<Chatting />}>
          </Route>
        </Routes>
        <Footer onClick={onTabChange} />
      </Router>
      
    </div>
  )
}

export default App;
