// Components
import Fibonacci from "./components/Fibonacci/Fibonacci";
import LetterRecurrence from "./components/LetterRecurrence/LetterRecurrence";
import Lights from "./components/Lights/Lights";
import NextElement from "./components/NextElement/NextElement";
import SumCode from "./components/SumCode/SumCode";
// Styles
import "./App.css";

function App() {
  return (
    <main className="mainWrapper">
      <h1 className="mainTitle">Desafio Target Sistemas</h1>
      <div className="card"><Fibonacci /></div>
      <div className="card"><LetterRecurrence /></div>
      <div className="card"><SumCode /></div>
      <div className="card"><NextElement /></div>
      <div className="card"><Lights /></div>
    </main>
  );
}

export default App;
