function getOption() {
  selectElement = document.querySelector("#dice");
  output = selectElement.value;

  if (output == "d6") {
    document.querySelector(".output").textContent = Math.floor(Math.random() * 6  + 1) 
  }
  else if (output == "d10") {
    document.querySelector(".output").textContent = Math.floor(Math.random() * 10  + 1) 
  }
  else if (output == "d20") {
    document.querySelector(".output").textContent = Math.floor(Math.random() * 20  + 1) 
  }
}