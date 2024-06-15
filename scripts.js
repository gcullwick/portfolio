function swap() {
  if (document.getElementById("photo").getAttribute("src") !== "20220521_174637.png") {
    document.getElementById("photo").setAttribute("src", "20220521_174637.png") 
  }
  else {
    console.log("Hello")
    document.getElementById("photo").setAttribute("src", "./Untitled.jpg")
  }
}