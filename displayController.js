export default class DisplayController {
    constructor(displayElement, characterFactory) {
      this.display = displayElement;
      this.characterFactory = characterFactory;
    }
  
    updateDisplay(text) {
      this.display.innerHTML = '';
      const paddedText = text.padEnd(32, ' ').slice(0, 32);
      for (let char of paddedText) {
        this.display.appendChild(this.characterFactory.createCharacterElement(char));
      }
    }
  }