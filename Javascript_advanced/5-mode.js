function changeMode(size, weight, transform, background, color) {
  return function() {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}

function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Adding a paragraph to the body
  const welcomeParagraph = document.createElement('p');
  welcomeParagraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(welcomeParagraph);

  // Adding buttons to the body
  const spookyButton = createThemeButton('Spooky', spooky);
  const darkModeButton = createThemeButton('Dark mode', darkMode);
  const screamModeButton = createThemeButton('Scream mode', screamMode);

  document.body.appendChild(spookyButton);
  document.body.appendChild(darkModeButton);
  document.body.appendChild(screamModeButton);
}

// Helper function to create theme buttons
function createThemeButton(text, themeFunction) {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', themeFunction);
  return button;
}

main();
