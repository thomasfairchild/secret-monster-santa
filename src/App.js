import { Route, Routes } from "react-router-dom";
import Story from "./Story";
import About from "./About";
import MonsterHistory from "./MonsterHistory";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
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

        <Route path='/firstpage' exact element={<FirstPage/>}/>

        <Route path='/secondpage' exact element={<SecondPage/>}/>

        <Route path='/thirdpage' exact element={<ThirdPage/>}/>

        <Route path='/fourthpage' exact element={<FourthPage/>}/>

        <Route path='/fifthpage' exact element={<FifthPage/>}/>
    </Routes>    
    </div>
  );
}

export default App;
