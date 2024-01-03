let celsius = document.querySelector("#celsius");
let fahrenheit = document.querySelector("#fahrenheit");

fahrenheit.oninput = function () {
  let celsiusConversion = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(celsiusConversion.toFixed(3));
};
celsius.oninput = function () {
  let fahrenheitConversion = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(fahrenheitConversion.toFixed(3));
};
