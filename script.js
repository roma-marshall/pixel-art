let color = document.querySelectorAll("li");
let card = document.querySelectorAll("td");

// getColor
for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function getColor() {
    let color = this.getAttribute("class");
    console.log(color);
    document.querySelector("div").classList = color;
  });
}

// drawFunc
for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function drawFunc() {
    let color = document.querySelector("div").className;
    this.classList = color;
  });
}
