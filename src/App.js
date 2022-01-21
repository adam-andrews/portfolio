import './App.css';
import Header from "./Components/Header";
import Cell from "./Components/Cell";

function App() {
  return (
    <div className="App">
      <div className = "App__hero">
        <Header />
        <div className="App__frontpage">
        <div className="App__image"/>
      <div className="App__title">
        <h1> Hi i’m Adam - a freelance <span className="text__blue"> react developer</span> based in <span className="text__orange">oxford</span> </h1>
        </div>
        </div>
        <Cell image="HomeIcon.svg" title="Home" />
        </div>
    </div>
  );
}

export default App;
