function changeMode(size, weight, transform, background, color) {
  // changing the STYLE of the BODY of html DOCUMENT
  // when changing from CSS things like font-size need camelCase fontSize
  return function() {
    // need to add px so it has a size reference
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

// function for modes with variables given
function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

// create paragraph with welcom message
const welcome = document.createElement("p");
welcome.textContent = 'Welcome Atlas!';
// add paragraph to the body of document
document.body.appendChild(welcome);
// create buttons
const spookybtn = document.createElement("button")
const darkbtn = document.createElement("button")
const screambtn = document.createElement("button")
// text on buttons
spookybtn.textContent = 'Spooky';
darkbtn.textContent = 'Dark Mode';
screambtn.textContent = 'Scream Mode';
// add buttons tp the body of document
document.body.appendChild(spookybtn);
document.body.appendChild(darkbtn);
document.body.appendChild(screambtn);
// click event listeners
spookybtn.onclick = spooky;
darkbtn.onclick = darkMode;
screambtn.onclick = screamMode;
}



main();
