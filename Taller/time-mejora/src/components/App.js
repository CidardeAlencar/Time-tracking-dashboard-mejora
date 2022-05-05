//eliminar logo.svg
import '../styles/App.css';
import {Shadow} from './Shadow';
import work from'../assets/icon-work.svg'
import play from'../assets/icon-play.svg'

function App() {
  //eliminar contenido del return
  // const theme='Shadow '+  props.theme
  return (
    <>
    <Shadow Type='Work' Houres='32' hrsweek='36'img={work} theme='Work '/>
    <Shadow Type='Play' Houres='10'hrsweek='8'img={play} theme='Play '/>
    </>
  );
}

export default App;
