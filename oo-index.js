document.addEventListener('DOMContentLoaded', createUnicorn)

function createUnicorn() {
  const vanessa = new Unicorn('Vanessa', 'Coder')
}

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000 

    this.eventArea = document.getElementById('event_area')
    this.imageArea = document.getElementById('image_area')
    this.restartButton = document.getElementById('restart').addEventListener("click",()=> this.restart())
    this.attackButton = document.getElementById('attack').addEventListener("click",()=> this.attack())
    this.defendButton = document.getElementById('defend').addEventListener("click",()=> this.defend())
    this.healButton = document.getElementById('heal').addEventListener("click",()=> this.heal())
    this.breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> this.breakdance())
    this.eatButton = document.getElementById('eat').addEventListener("click",()=> this.eatCronut())
  } 

  renderArea() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(`${this.occupation}`));
    this.eventArea.prepend(div);
  } 

  restart() {
    while (this.eventArea.hasChildNodes()) {
      this.eventArea.removeChild(this.eventArea.lastChild);
    } 
    this.occupation = "Out on the street, ready to go!"
    this.renderArea()
    this.imageArea.className = 'new';
    this.health = 1000
  }
   
  attack() {
    this.occupation = 'ATTAAAAAAAAAK!'
    this.renderArea()
    this.imageArea.className = 'attack';
  } 

  defend() {
    this.occupation = 'You put sunglasses on.'
    this.renderArea()
    this.imageArea.className = 'defend';
  } 

  heal() {
    this.occupation = "You feel refreshed after yoga."
    this.renderArea()
    this.imageArea.className = 'heal';
  } 

  breakdance() {
    this.occupation = "It's really spinning class"
    this.renderArea()
    this.imageArea.className = 'breakdance';
  } 

  eatCronut() {
    this.health += 1000
    this.occupation = `You've gained 1000 health points. I now have ${this.health} points!`
    this.renderArea()
    this.imageArea.className = 'eat';
  }
















}
