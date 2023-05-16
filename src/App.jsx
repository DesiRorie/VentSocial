import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import BottomNav from "./components/BottomNav";

import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import Explorepage from "./pages/Explorepage";
import Loginpage from "./pages/Loginpage";
import { useState } from "react";
import UserContext from "./context/UserContext";

function App() {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(0);

  const handleLogin = (login, success) => {
    console.log("Login:", login);
    console.log("Success:", success);

    if (success) {
      setIsLoggedIn(true);
      setUserName(login);
    }
  };

  return (
    <>
      <UserContext.Provider value={userName}>
        {!isLoggedIn && <Loginpage handleLogin={handleLogin} />}
        {isLoggedIn && (
          <>
            <Routes>
              <Route
                path="/"
                element={<Homepage posts={posts} setPosts={setPosts} />}
              />
              <Route
                path="/profile"
                element={
                  <Profilepage
                    likes={likes}
                    setLikes={setLikes}
                    posts={posts}
                    setPosts={setPosts}
                  />
                }
              />
              <Route path="/explore" element={<Explorepage />} />
            </Routes>
            <BottomNav />
          </>
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
