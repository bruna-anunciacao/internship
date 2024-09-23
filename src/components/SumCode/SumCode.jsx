import { useState, useEffect } from "react";

export default function SumCode() {
    const [sum, setSum] = useState(0);
    const sumFunction = () => {
        let index = 12;
        let sum = 0;
        let k = 1;
        while (k < index) {
            k = k + 1;
            sum = sum + k;
        }
        setSum(sum);
    }
    useEffect(() => {
        sumFunction();
    }, []);
  return (
    <div>
      <h1>Soma</h1>
      <p>{`3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);`}</p>
        <p>{`Valor da soma: ${sum}`}</p>
    </div>
  );
}
