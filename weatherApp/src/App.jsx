import { Background } from './WeatherApp/background.jsx';
import homeImg from "./assets/Backgrounds/home.png";
import clearImg from "./assets/Backgrounds/clear.jpg";


function App() {
  return (
    <>
      <div className="App">
      <Background bgImg={homeImg}  rotateDeg={720}/>
      </div>
    </>
  )
}

export default App
