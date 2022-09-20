const hungerBlock = document.querySelector("#hunger");
const sleepBlock = document.querySelector("#sleep");
const playBlock = document.querySelector("#play");
const happinessBlock = document.querySelector("#happiness");
const thirstyBlock = document.querySelector("#thirsty");
const scoreBlock = document.querySelector("#score");
const nameBlock = document.querySelector(".tamagotchi-name");
// btn
const btn = document.querySelectorAll(".button");
// emoji
let emojiBlock = document.querySelector("#emoji");

let maxHunger = 100;
let maxSleep = 100;
let maxPlay = 100;
let maxHappiness = 100;
let maxThirsty = 100;
let score = 0;

const tamagotchi = {
  name: "Splinfao",
  hunger: maxHunger,
  sleep: maxSleep,
  play: maxPlay,
  happy: maxHappiness,
  thirsty: maxThirsty,

  // основний метод
  core: function () {
    const userName = prompt("What is your name?", "");
    nameBlock.innerHTML = `Name: ${userName}`;

    let interval = setInterval(() => {
      score++;
      // не може бути більше ніж 100
      if (this.hunger > 100) {
        this.hunger = 100;
      } else if (this.sleep > 100) {
        this.sleep = 100;
      } else if (this.play > 100) {
        this.play = 100;
      } else if (this.happy > 100) {
        this.happy = 100;
      } else if (this.thirsty > 100) {
        this.thirsty = 100;
      }

      // emoji
      if (
        this.hunger <= 80 ||
        this.sleep <= 80 ||
        this.play <= 80 ||
        this.happy <= 80 ||
        this.thirsty <= 80
      ) {
        emojiBlock.innerHTML = `&#128512;`;
      }
      if (
        this.hunger <= 50 ||
        this.sleep <= 50 ||
        this.play <= 50 ||
        this.happy <= 50 ||
        this.thirsty <= 50
      ) {
        emojiBlock.innerHTML = `&#128528;`;
      }
      if (
        this.hunger <= 20 ||
        this.sleep <= 20 ||
        this.play <= 20 ||
        this.happy <= 20 ||
        this.thirsty <= 20
      ) {
        emojiBlock.innerHTML = `&#129298`;
      }

      // if <=0
      if (
        this.hunger <= 0 ||
        this.sleep <= 0 ||
        this.play <= 0 ||
        this.happy <= 0 ||
        this.thirsty <= 0
      ) {
        // if <= 0, ти програв
        clearInterval(interval);
        this.hunger = 0;
        this.sleep = 0;
        this.play = 0;
        this.happy = 0;
        this.thirsty = 0;
        alert(`You lost. Your score - ${score - 1}`);
      } else {
        // else add text
        hungerBlock.innerHTML = `Hunger: ${(this.hunger -= 2)}`;
        sleepBlock.innerHTML = `Sleep: ${(this.sleep -= 2)}`;
        playBlock.innerHTML = `Play: ${(this.play -= 2)}`;
        happinessBlock.innerHTML = `Happiness: ${(this.happy -= 2)}`;
        thirstyBlock.innerHTML = `Thirsty: ${(this.thirsty -= 2)}`;
        scoreBlock.innerHTML = `SCORE: ${score}`;
      }
    }, 1000);
  },

  // btns
  feed: function () {
    btn[0].addEventListener("click", () => {
      this.hunger += 2;
    });
  },

  chill: function () {
    btn[1].addEventListener("click", () => {
      this.sleep += 2;
    });
  },

  playing: function () {
    btn[2].addEventListener("click", () => {
      this.play += 2;
    });
  },

  walk: function () {
    btn[3].addEventListener("click", () => {
      this.happy += 2;
    });
  },

  drink: function () {
    btn[4].addEventListener("click", () => {
      this.thirsty += 2;
    });
  },
};
tamagotchi.core();
tamagotchi.drink();
tamagotchi.walk();
tamagotchi.playing();
tamagotchi.chill();
tamagotchi.feed();
