// generate new table on click
let row = 8;
let cell = 8;
function generateTable(row, cell) {
  let table = document.querySelector("table");
  table.innerHTML = "";
  for (let i = 0; i < row; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j < cell; j++) {
      let cell = row.insertCell(j);
    }
  }
}

// generate table on load
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
    console.log(color); //selected color
    document.querySelector("div").classList = color; // set new color
  });
}

// drawFunc
let card = document.querySelectorAll("td");
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function drawFunc() {
    let color = document.querySelector("div").className;
    this.classList = color; //show selected color
  });
}

// getSize
let button = document.querySelectorAll("button");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function getSize() {
    let p = this.getAttribute("class");
    document.querySelector("p").classList = p;
    console.log(p);
    document.querySelector("p").innerHTML = p;

    switch (p) {
      case "8x8":
        row = 8;
        cell = 8;
        break;
      case "12x12":
        row = 12;
        cell = 12;
        break;
      case "16x16":
        row = 16;
        cell = 16;
        break;
      case "32x32":
        row = 32;
        cell = 32;
        break;
    }
    generateTable(row, cell);
  });
}
