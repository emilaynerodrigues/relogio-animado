const dayContainer = document.querySelector(".day");

document.addEventListener("DOMContentLoaded", () => {
  new TypeIt(".dinamic", {
    speed: 300,
    loop: true,
  })
    .type("EU ESPAÇO", { delay: 900 })
    .delete(6)
    .go();
});

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
