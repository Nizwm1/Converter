let c = document.getElementById("celsius");
let f = document.getElementById("fahr");
function cel() {
  f.value = (c.value * 9) / 5 + 32;
};
function fah() {
  c.value = ((f.value - 32) * 5) / 9;
};
