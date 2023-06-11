const dayContainer = document.querySelector(".day");

// seletores de hora, minuto, segundo
const hoursContainer = document.querySelector(".hour");
const minutesContainer = document.querySelector(".minute");
const secondsContainer = document.querySelector(".second");

// document.addEventListener("DOMContentLoaded", () => {
//   new TypeIt(".dinamic", {
//     speed: 300,
//     loop: true,
//   })
//     .type("EU ESPAÇO", { delay: 900 })
//     .delete(6)
//     .go();
// });

function showDay() {
  const weekDays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado-feira",
  ];
  const currentDay = new Date();
  const weekDay = weekDays[currentDay.getDay()];
  //   document.getElementById("dia").innerHTML = `Hoje é ${weekDay}`;

  dayContainer.textContent = weekDay;
  console.log(weekDay);
}

setInterval(showDay, 1);
function atualizarRelogio() {
  // Obter a hora atual
  const currentTime = new Date();

  // Formatar a hora como uma string
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Exibe a hora formatada
  secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds; //se segundos for menor que 10 a função deve acrescentar o 0 na frente, senão continua normal
  minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
  hoursContainer.textContent = hours < 10 ? "0" + hours : hours;

}

// Atualizar o relógio a cada segundo
setInterval(atualizarRelogio, 1000);
