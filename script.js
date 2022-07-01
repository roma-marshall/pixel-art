// generate tables row/cell
let table = document.querySelector("table");
for (let i = 0; i < 8; i++) {
  let row = table.insertRow(i);
  for (let j = 0; j < 8; j++) {
    let cell = row.insertCell(j);
  }
}

// getColor
let color = document.querySelectorAll("li");
for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function getColor() {
    let color = this.getAttribute("class");
    console.log(color);
    document.querySelector("div").classList = color;
  });
}

// drawFunc
let card = document.querySelectorAll("td");
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function drawFunc() {
    let color = document.querySelector("div").className;
    this.classList = color;
  });
}
