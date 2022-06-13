import { useState } from "react";
import "./Counter.css";

const Counter = ({ valorInicial, numeroInicial }) => {
  const [counter, setCounter] = useState(valorInicial);
  const [number, setNumber] = useState(numeroInicial);
  const input = document.querySelector("input");

  if (isNaN(number)) {
    setCounter("Valor No Valido");
    setNumber(1);
  }

  const incrementar = () => {
    setCounter(counter + Number(number));
  };

  const disminuir = () => {
    setCounter(counter - number);
  };

  const reset = (e) => {
    setCounter(valorInicial);

    setNumber((input.value = ""));
  };

  return (
    <div className="container">
      <h1>Contador</h1>
      <span>{counter}</span>
      <br />
      <div className="btn">
        <button onClick={incrementar}>+</button>
        <button onClick={disminuir}>-</button>
      </div>
      <div className="form__group field">
        <p>
          Elige Numero:
          <input
            type="number"
            class="form__field"
            placeholder="1...2...3..."
            id="name"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
        </p>
      </div>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default Counter;
