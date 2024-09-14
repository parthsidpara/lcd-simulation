import CharacterFactory from './characterFactory.js';
import DisplayController from './displayController.js';

async function initializeApp() {
  const response = await fetch('charPatterns.json');
  const charPatterns = await response.json();

  const characterFactory = new CharacterFactory(charPatterns);
  const displayElement = document.getElementById('lcd-display');
  const displayController = new DisplayController(displayElement, characterFactory);

  document.getElementById('update-button').addEventListener('click', () => {
    const input = document.getElementById('text-input');
    displayController.updateDisplay(input.value);
  });

  // Initialize display
  displayController.updateDisplay('');
}

initializeApp();