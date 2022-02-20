'use strict';
// please do not delete the 'use strict' line above

const colorVariation = ["white", "blue", "green", "red", "yellow"];
const actionVariation = ["シロ", "バータ", "グルド", "あかから", "おでんくん"];


document.getElementById('color-button').addEventListener('click', changeColorAndAction);

function changeColorAndAction() {
  const randomNumber = Math.floor(Math.random() * colorVariation.length);
  console.log(randomNumber);
  document.bgColor = colorVariation[randomNumber];
  document.getElementsByTagName("img")[0].src = colorVariation[randomNumber] + ".png";
  document.getElementById("name").innerText = actionVariation[randomNumber];
  const audio = new Audio(actionVariation[randomNumber] + ".MP3");
  audio.play();
}
