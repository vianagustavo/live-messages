const input = document.getElementById("message");
const messageContainer = document.getElementById("messageContainer");
const checkBox = document.getElementById("me");

let messages = [];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const messageText = input.value.trim();

  if (messageText !== "") {
    const messageObj = {
      text: messageText,
      fromMe: checkBox.checked,
    };
    messages.push(messageObj);

    displayMessages();

    input.value = "";
  }
});

function displayMessages() {
  messageContainer.innerHTML = "";

  messages.forEach((messageObj) => {
    const now = new Date();
    const messageHours = now.getHours();
    const messageMinutes = now.getMinutes();
    const messageOrigin = messageObj.fromMe ? "receiver" : "sender";

    const timerMessage = `${messageHours}:${messageMinutes}`;
    const timerMessageDiv = document.createElement("div");
    timerMessageDiv.textContent = timerMessage;
    timerMessageDiv.setAttribute("class", `${messageOrigin}TimerMessage`);

    const elementMessageDiv = document.createElement("div");
    elementMessageDiv.textContent = messageObj.text;
    elementMessageDiv.setAttribute("class", `${messageOrigin}ElementMessage`);

    const messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", `${messageOrigin}MessageWrapper`);
    messageWrapper.appendChild(elementMessageDiv);
    messageWrapper.appendChild(timerMessageDiv);

    messageContainer.appendChild(messageWrapper);
  });
}
