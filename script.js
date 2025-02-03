var btn = document.querySelector("button");
var arr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxw7Muxp7CVHQGve8fY9kzTc3Rty_LpciB7g&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtnKO0xjMkKoaQimywSQVtSYTtlCUAW7IVQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7LAmhg1sZm12bavFjkHyaTK1hnfbePuniXg&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGhxQojWHW3cGDEmpflaFLZs4K-4jtOD-IA&s"
];

function random() {
  let randomX = Math.random() * 89;
  let randomY = Math.random() * 89;
  let randomIndex = Math.floor(Math.random() * arr.length);
  return { randomX, randomY, randomIndex };
}

function imges() {
  const { randomX, randomY, randomIndex } = random();
  
  const img = document.createElement("img");
  img.style.height = "100px";
  img.style.position = "absolute";
  img.style.top = randomX + "%";
  img.style.left = randomY + "%";
  
  img.src = arr[randomIndex];
  
  document.body.appendChild(img);
}



// Attach the click event listener to the button.
btn.addEventListener("click", imges);
