import { Route, Routes, Link } from "react-router-dom";
import Story from "./Story";
import About from "./About";
import MonsterHistory from "./MonsterHistory";
import Header from "./Header";
import './App.css';
import MainBanner from './images/MainBanner.gif';

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <img src={MainBanner} alt="banner"/>
      </div>
        <Header/>
    <Routes>
        <Route path='/' exact element={<Story/>}/>

        <Route path='/about' exact element={<About/>}/>

        <Route path='/monsterhistory' exact element={<MonsterHistory/>}/>
    </Routes>    
    </div>
  );
}

export default App;
