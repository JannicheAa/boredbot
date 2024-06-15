/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/

const btnEl = document.getElementById("btn");
const activityDescriptionEl = document.getElementById("activity-description");
const reaction = [
  "🤩",
  "🥳",
  "❤️",
  "💪",
  "🔥",
  "🌸",
  "🐒",
  "😎",
  "🤓",
  "😜",
  "👀",
];

btnEl.addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      activityDescriptionEl.textContent = `${
        data.activity
      } ${getRandomReaction()}`;
    });
});

function getRandomReaction() {
  const randomIndex = Math.floor(Math.random() * reaction.length);
  return reaction[randomIndex];
}
