document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // INPUT
  let x1 = +document.getElementById("x1").value;
  let y1 = +document.getElementById("y1").value;
  let x2 = +document.getElementById("x2").value;
  let y2 = +document.getElementById("y2").value;
  // PROCESS
  let total = (y2 - y1) / (x2 - x1);
  // OUTPUT
  document.getElementById("output").innerHTML = total;
}
