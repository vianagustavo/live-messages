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
    const messageElement = document.createElement("div");
    messageElement.textContent = message;

    messageContainer.appendChild(messageElement);
  });
}
