import { useState, useEffect } from "react";

export default function LetterRecurrence() {
  const [inputString, setInputString] = useState("");
  const [count, setCount] = useState(0);
  const [hasResult, setHasResult] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputString(value);
  };

  const countOccurrences = (str) => {
    return (str.match(/a/gi) || []).length;
  };

  useEffect(() => {
    setHasResult(false);
  }, [inputString]);
  return (
    <div>
      <h1>Recorrencia da Letra 'a'</h1>
      <p>
        2) Escreva um programa que verifique, em uma string, a existência da
        letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de
        vezes em que ela ocorre.
      </p>
      <input
        type="text"
        value={inputString}
        onChange={handleInputChange}
        placeholder="Digite uma string"
      />
      <button
        onClick={() => {
          setHasResult(true);
          setCount(countOccurrences(inputString));
        }}
      >
        Verificar
      </button>
      {hasResult && (
        <>
          <p>Resultado:</p>
          <p>A letra 'a' ocorre {count} vezes na string.</p>
        </>
      )}
    </div>
  );
}
