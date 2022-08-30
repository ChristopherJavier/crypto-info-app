import { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import coinService from "./services/coins"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Coins from "./components/Coins"

const App = () => {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    coinService.getAll().then(res => setCoins(res))
  }, [])


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home topCoins={coins.slice(0, 10)}/>} />
        <Route path="/coins" element={<Coins coins={coins}/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
