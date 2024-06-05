window.onload = function () {
  let triangleUp = document.getElementById("triangle-up");
  let triangleDown = document.getElementById("triangle-down");
  let square = document.getElementById("square");
  let squareChild = square.children[0];

  triangleUp.addEventListener("click", function () {
    squareChild.innerHTML = parseInt(squareChild.innerHTML) + 1;
  });

  triangleDown.addEventListener("click", function () {
    squareChild.innerHTML = parseInt(squareChild.innerHTML) - 1;
  });

  square.addEventListener("click", function () {
    squareChild.innerHTML = 0;
  });
};
