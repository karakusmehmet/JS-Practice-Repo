const fromMoney = document.getElementById("from-money");
const userValue = document.getElementById("value");
const toMoney = document.getElementById("to-money");
const result = document.getElementById("result");
const convertButton = document.getElementById("convert-btn");
const baseURL =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_OmEI52JX4ypBKWjvpm67QhEk4AX0L2BSa63jkexD&base_currency=";

const runEvents = () => {
  fromMoney.addEventListener("change", async (e) => {
    const currencyValue = fromMoney.value;
    const url = baseURL + currencyValue;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    getData(jsonResponse.data);
  });

  convertButton.addEventListener("click", async (e) => {
    const value = userValue.value;
    const currency = toMoney.value;
    const allData = getData();

    result.value = (allData[currency] * value).toFixed(2);
  });
};

const getData = (data) => {
  if (data) {
    getData.data = data;
  }
  return getData.data;
};

runEvents();
fromMoney.dispatchEvent(new Event("change"));
