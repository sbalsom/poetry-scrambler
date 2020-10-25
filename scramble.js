
scrambler = document.getElementById("scrambler")



function scramble() {
  console.log("scrambling")
  var poem = document.querySelector('ul');
  for (var i = poem.children.length; i >= 0; i--) {
    poem.appendChild(poem.children[Math.random() * i | 0]);
  }
}

scrambler.addEventListener("click", scramble)
