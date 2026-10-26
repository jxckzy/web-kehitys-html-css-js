function convertTemperature() {
  const celsiusInput = document.getElementById("celsius").value;

  if (celsiusInput === "") {
    alert("Please enter a valid temperature.");
    return;
  }

  const celsius = parseFloat(celsiusInput);

  const fahrenheit = (celsius * 9 / 5) + 32;
  const kelvin = celsius + 273.15;

  document.getElementById("fahrenheitResult").innerText = 
    `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    
  document.getElementById("kelvinResult").innerText = 
    `Kelvin: ${kelvin.toFixed(2)} K`;

  document.getElementById("result").style.display = "block";
}