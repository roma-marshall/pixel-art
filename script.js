let color = document.querySelectorAll("li");

// getColor
for (let i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function getColor() {
    let color = this.getAttribute("class");
    console.log(color);
    document.querySelector("div").classList = color;
  });
}
