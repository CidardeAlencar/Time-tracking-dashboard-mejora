//eliminar logo.svg
import '../styles/App.css';
import {Shadow} from './Shadow';
import {FirstCardShadow} from './FirstCardShadow';
import work from'../assets/icon-work.svg'
import play from'../assets/icon-play.svg'
import study from'../assets/icon-study.svg'
import exercise from'../assets/icon-exercise.svg'
import social from'../assets/icon-social.svg'
import selfcare from'../assets/icon-self-care.svg'
function App() {
  //eliminar contenido del return
  return (
    <>
    <FirstCardShadow/>
    <Shadow Type='Work' Houres='32' hrsweek='36'img={work} theme='Work '/>
    <Shadow Type='Play' Houres='10'hrsweek='8'img={play} theme='Play '/>
    <Shadow Type='Study' Houres='4'hrsweek='7'img={study} theme='Study '/>
    <Shadow Type='Exercise' Houres='4'hrsweek='5'img={exercise} theme='Exercise '/>
    <Shadow Type='Social' Houres='5'hrsweek='10'img={social} theme='Social '/>
    <Shadow Type='Self Care' Houres='2'hrsweek='2'img={selfcare} theme='selfCare '/>
    </>
  );
}

export default App;
