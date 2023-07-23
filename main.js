var affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];

var mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don\’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
]
var receiveMessageBtn = document.querySelector(".btn");
var affirmationRadioButton = document.querySelector("#affirmation");
var mantraRadioButton = document.querySelector("#mantra");
var imageContainer = document.querySelector(".img-container");
var form = document.querySelector(".select-form");
var meditationImage = document.querySelector("img");
var clearBtn = document.querySelector(".reset-btn")

receiveMessageBtn.addEventListener("click", function (event, message) {
  if (affirmationRadioButton.checked) {
    event.preventDefault();
    message = receiveMessage(affirmations);
    toggleImg(meditationImage);
    displayMessage(message, imageContainer);
    toggleBtn(clearBtn);
    toggleBtn(receiveMessageBtn);
  }
  else if (mantraRadioButton.checked) {
    event.preventDefault();
    message = receiveMessage(mantras);
    toggleImg(meditationImage);
    displayMessage(message, imageContainer);
    toggleBtn(clearBtn);
    toggleBtn(receiveMessageBtn);
  }
})
clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  uncheckRadioButtons(affirmationRadioButton, mantraRadioButton);
  removeMessage(imageContainer);
  toggleImg(meditationImage);
  appendImg(meditationImage, imageContainer);
  toggleBtn(receiveMessageBtn);
  toggleBtn(clearBtn);

})

function receiveMessage(selfCareArr) {
  if (affirmationRadioButton.checked || mantraRadioButton.checked) {
    var randomAdviceIndex = randomIndex(selfCareArr);
  }
  return selfCareArr[randomAdviceIndex];
}

function randomIndex(selfCareArr) {
  var index = Math.floor(Math.random() * selfCareArr.length);
  return index;
}

function toggleImg(image) {
  image.classList.toggle("hidden");
}

function toggleBtn(button) {
  button.classList.toggle("hidden");
}

function displayMessage(message, container) {
  container.innerHTML = `<h1 class="message">${message}</h1>`
}

function removeMessage(container) {
  container.innerHTML = ""
}

function appendImg(image, container) {
  container.appendChild(image)
}

function uncheckRadioButtons(radioButtonOne, radioButtonTwo) {
  radioButtonOne.checked = false;
  radioButtonTwo.checked = false;
}
