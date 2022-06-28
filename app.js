//Selecionando a referencia das horas, mimutos e segundos no html:
const secondsContainer = document.querySelector("#seconds");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");
const minutesContainer = document.querySelector("#minutes");
const newYearContainer = document.querySelector("#year");
const spinnerLoading = document.querySelector("#loading");
const countDownContainer = document.querySelector("#countdown");

const titleH1 = document.querySelector("h1");

//proximo ano
const nextYear = new Date().getFullYear() + 1;
//capturando proximo ano para contagem:
const newYearTime = new Date(`january 01 ${nextYear} 00:00:00`);

newYearContainer.textContent = nextYear;

const getTimeUnit = (unit) => (unit < 10 ? "0" + unit : unit);

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
  daysContainer.textContent = getTimeUnit(days);
  hoursContainer.textContent = getTimeUnit(hours);
  minutesContainer.textContent = getTimeUnit(minutes);
  secondsContainer.textContent = getTimeUnit(seconds);
};

//Função para fazer update/ atualiza o contador:
const updateCountDown = () => {
  const currentTime = new Date();
  //Obetendo quantidade de horaspara o proximo ano
  const difference = newYearTime - currentTime;
  //ESSA DIVISÃO NA CONST DAYS VAI RESULTAR NO NUMERO DE SEGUNDOS para virar o primeiro dia do ano que vem:
  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  insertCountDownValues({ days, hours, minutes, seconds });
};

const handleCountDownDisplay = () => {
  //removendo elementos da tela e fazendo o contador ser exibido
  spinnerLoading.remove();
  countDownContainer.style.display = "flex";

  animationEffect(titleH1);
  titleH1.style.display = "block";
};

//setTimeout invoca uma função no tempo qeu em especificarmos para ele, depois de 1 segundo que a pagina for carregda, a função sera executada
setTimeout(handleCountDownDisplay, 1000);

//atualizando valores na tela aca da segundo:
setInterval(updateCountDown, 1000);

//animação effect
const animationEffect = (element) => {
  const textArray = element.innerHTML.split("");
  element.innerHTML = "";
  textArray.forEach((letter, index) => {
    setTimeout(() => (element.innerHTML += letter), 75 * index);
  });
};
