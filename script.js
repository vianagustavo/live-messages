const input = document.getElementById("message");
const messageContainer = document.getElementById("messageContainer");

let messages = [];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const messageText = input.value.trim();

  if (messageText !== "") {
    messages.push(messageText);

    displayMessages();

    input.value = "";
  }
});

function displayMessages() {
  messageContainer.innerHTML = "";

  messages.forEach((message) => {
    const now = new Date();
    const messageHours = now.getHours();
    const messageMinutes = now.getMinutes();

    const timerMessage = `${messageHours}:${messageMinutes}`;
    const timerMessageDiv = document.createElement("div");
    timerMessageDiv.textContent = timerMessage;
    timerMessageDiv.setAttribute("class", "timerMessage");

    const elementMessageDiv = document.createElement("div");
    elementMessageDiv.textContent = message;
    elementMessageDiv.setAttribute("class", "elementMessage");

    const messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", "messageWrapper");
    messageWrapper.appendChild(elementMessageDiv);
    messageWrapper.appendChild(timerMessageDiv);

    messageContainer.appendChild(messageWrapper);
  });
}
