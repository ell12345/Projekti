const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const ammountOne = document.getElementById("ammount-one");
const ammountTwo = document.getElementById("ammount-two");
const swap = document.getElementById("swap");
const kurs = document.getElementById("kurs");

function fetchData() {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[currency_two] / data.rates[currency_one];
      kurs.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
      console.log(ammountOne, ammountTwo);
      ammountTwo.value = (ammountOne.value * rate).toFixed(2);
    });
}

fetchData();

currencyOne.addEventListener("change", fetchData);
currencyTwo.addEventListener("change", fetchData);
ammountOne.addEventListener("input", fetchData);

swap.addEventListener("click", () => {
  let temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  fetchData();
});
