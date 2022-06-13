import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter valorInicial={0} numeroInicial={1} />
    </div>
  );
}

export default App;
