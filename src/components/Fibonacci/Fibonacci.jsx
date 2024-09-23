import { useState, useEffect } from "react";

export default function Fibonacci() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const isPerfectSquare = (x) => {
    let s = Math.floor(Math.sqrt(x));
    return s * s === x;
  };

  const isFibonacci = (num) => {
    if (num < 0) return false;
    setResult(
      isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
    );
    setHasResult(true); 
  };

  useEffect(() => {
    setHasResult(false);
  }, [number]);

  return (
    <div>
      <h1>Fibonacci</h1>
      <p>
        1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo
        valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2,
        3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar
        onde, informado um número, ele calcule a sequência de Fibonacci e
        retorne uma mensagem avisando se o número informado pertence ou não a
        sequência.
      </p>
      <label>
        <p>Digite um número</p>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button onClick={() => isFibonacci(Number(number))}>Verificar</button> 
      {hasResult && (
        <>
          <p>Resultado: </p>
          <p>{result ? `O número ${number} pertence a sequência` : `O número ${number} não pertence a sequência`}</p>
        </>
      )}
    </div>
  );
}
