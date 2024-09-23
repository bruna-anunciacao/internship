export default function Lights() {
  return (
    <div>
      <h1>Lâmpadas</h1>
      <p>
        5) Você está em uma sala com três interruptores, cada um conectado a uma
        lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em
        que está, mas pode ligar e desligar os interruptores quantas vezes
        quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
        Como você faria para descobrir, usando apenas duas idas até uma das
        salas das lâmpadas, qual interruptor controla cada lâmpada?  
      </p>
      <div>
          <p>Solução: </p>
          <p>
            Ligo o primeiro interruptor e desligo após alguns minutos, ligo o
            segundo interruptor e saio para verificar a sala. Se a lâmpada estiver
            acesa, o segundo interruptor controla a lâmpada, se estiver apagada e
            quente, o primeiro interruptor controla a lâmpada e se não estiver
            quente, o terceiro interruptor controla a lâmpada.
          </p>
      </div>
    </div>
  );
}
