import Footer from "./components/Footer"


//tabs
import Chat from "./tabs/Chat";
import Group from "./tabs/Group";
import Profile from "./tabs/Profile";
import Setting from "./tabs/Setting";

import Chatting from "./Chatting";

//routes
import Login from "./routes/Login";

import styles from "./App.module.css"
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {

  const [tab, setTab] = useState("Chat");
  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const onTabChange = (event) => {
    setTab(event.target.alt ? event.target.alt : event.target.children[0].alt);
  }

  useEffect(() => {
    fetch("http://jinichat.kr/users", {
        method: "GET",
        credentials: 'include'
    }).then((data) => {
        if (data.status === 403) {
            setLoggedIn(false);
        } else if (data.ok) {
            setLoggedIn(true);
        }
    })
  }, [user])

  function Home() {
    return (
      <div>
        <h1 className={styles.title}>{tab}</h1>
        {tab === "Chat" ? <Chat /> : null}
        {tab === "Group" ? <Group /> : null}
        {tab === "Profile" ? <Profile loggedIn={loggedIn} /> : null}
        {tab === "Setting" ? <Setting /> : null}
        
        
      </div>
    )
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Chatting />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
        <Footer onClick={onTabChange} />
      </Router>
      
    </div>
  )
}

export default App;
