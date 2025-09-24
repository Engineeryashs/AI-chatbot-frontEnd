import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import Header from "./Components/Header";
import { useAuth } from "./context/Auth-Context";
import Chats from "./Pages/Chats";
function App() {
const auth=useAuth();
  return (
        <main>
          <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
          {auth?.isLoggedin && auth.user && (
          <Route path="/chats" element={<Chats/>} />
        )}
        <Route path="/signin" element={<Signin/>}/>
        </Routes>
  </main>
   
  )
}

export default App
