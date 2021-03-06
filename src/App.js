import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Story from "./Story";
import About from "./About";
import MonsterHistory from "./MonsterHistory";
import Movie from "./Movie";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import SixthPage from "./SixthPage";
import SeventhPage from "./SeventhPage";
import EighthPage from "./EighthPage";
import NinthPage from "./NinthPage";
import TenthPage from "./TenthPage";
import EleventhPage from "./EleventhPage";
import TwelfthPage from "./TwelfthPage";
import ThirteenthPage from "./ThirteenthPage";
import FourteenthPage from "./FourteenthPage";
import FifteenthPage from "./FifteenthPage";
import SixteenthPage from "./SixteenthPage";
import LastPage from "./LastPage";
import Header from "./Header";
import './App.css';
import MainBanner from './images/MainBanner.png';


function App() {

  useEffect(() => {
    document.title = "Secret Monster Santa"
  }, [])


  return (
    
    <div className="App">
      <div className="Banner">
        <img src={MainBanner} alt="banner"/>
      </div>
        <Header/>
        <div className="Background">
    <Routes>
        <Route path='/' exact element={<Story/>}/>

        <Route path='/about' exact element={<About/>}/>

        <Route path='/monsterhistory' exact element={<MonsterHistory/>}/>

        <Route path='/movie' exact element={<Movie/>}/>

        <Route path='/firstpage' exact element={<FirstPage/>}/>

        <Route path='/secondpage' exact element={<SecondPage/>}/>

        <Route path='/thirdpage' exact element={<ThirdPage/>}/>

        <Route path='/fourthpage' exact element={<FourthPage/>}/>

        <Route path='/fifthpage' exact element={<FifthPage/>}/>

        <Route path='/sixthpage' exact element={<SixthPage/>}/>

        <Route path='/seventhpage' exact element={<SeventhPage/>}/>

        <Route path='/eighthpage' exact element={<EighthPage/>}/>

        <Route path='/ninthpage' exact element={<NinthPage/>}/>

        <Route path='/tenthpage' exact element={<TenthPage/>}/>

        <Route path='/eleventhpage' exact element={<EleventhPage/>}/>

        <Route path='/twelfthpage' exact element={<TwelfthPage/>}/>

        <Route path='/thirteenthpage' exact element={<ThirteenthPage/>}/>

        <Route path='/fourteenthpage' exact element={<FourteenthPage/>}/>

        <Route path='/fifteenthpage' exact element={<FifteenthPage/>}/>

        <Route path='/sixteenthpage' exact element={<SixteenthPage/>}/>

        <Route path='/lastpage' exact element={<LastPage/>}/>
    </Routes>   
    </div> 
    </div>
  );
}

export default App;
