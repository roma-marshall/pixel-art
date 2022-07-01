 //click event
 let convertBtn = document.querySelector("#convert");
 convertBtn.addEventListener("click", () => {
   //convert table to image
   let resultDiv = document.querySelector("#result");
   let r = document.querySelector("#preview").innerHTML = "Preview:"
   html2canvas(document.querySelector("table"), {
     onrendered: function (canvas) {
       let img = canvas.toDataURL("image/png");
       result.innerHTML = '<img src="' + img + '"><br />';
       result.innerHTML += result.innerHTML = '<a download="result.png" href="'+img+'">PNG</a>&nbsp;';
       result.innerHTML += result.innerHTML = '<a download="result.jpg" href="'+img+'">JPG</a>&nbsp;';
       result.innerHTML += result.innerHTML = '<a download="result.gif" href="'+img+'">GIF</a>';
     },
   });
 });