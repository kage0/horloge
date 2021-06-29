var hour = document.getElementsByClassName("hour-stick")[0];
var min = document.getElementsByClassName("min-stick")[0];
var second = document.getElementsByClassName("seconde-stick")[0];
var date = document.getElementById("date");

setInterval(() => {
  second.style.visibility = "visible";
  min.style.visibility = "visible";
  hour.style.visibility = "visible";

  date.innerText =
    new Date().getHours() +
    " : " +
    new Date().getMinutes() +
    " : " +
    new Date().getSeconds();
  second.style.rotate = new Date().getSeconds() * 6 + "deg";
  min.style.rotate = new Date().getMinutes() * 6 + "deg";
  hour.style.rotate = new Date().getHours() * 30 + "deg";
  console.log(new Date().getHours());
}, 1000);
