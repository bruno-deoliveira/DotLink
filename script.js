function toggleMode() {
  const body = document.body
  body.classList.toggle("dark")

  const img = document.querySelector("#profile img")

  if (body.classList.contains("dark")) {
    img.setAttribute("src", "./assets/Avatar-amarelo.png")
  } else {  
    img.setAttribute("src", "./assets/Avatar-preto.png")
  }

}