const input = document.getElementById("message");
const senderName = document.getElementById("senderName");
const messageContainer = document.getElementById("messageContainer");
const checkBox = document.getElementById("me");
const messageDate = document.getElementById("date");
const timestamp = document.getElementById("timestamp");
dayjs.extend(window.dayjs_plugin_relativeTime);

let messages = [];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const messageText = input.value.trim();

  if (messageText !== "") {
    const messageObj = {
      text: messageText,
      fromMe: checkBox.checked,
      sender: senderName.value,
      date: messageDate.value,
      timestamp: timestamp.value,
    };

    messages.push(messageObj);

    displayMessages();

    input.value = "";
  }
});

checkBox.addEventListener("change", function () {
  if (checkBox.checked) {
    senderName.disabled = true;
  } else {
    senderName.disabled = false;
  }
});

function displayMessages() {
  messageContainer.innerHTML = "";

  messages.forEach((messageObj) => {
    const now = new Date();
    const messageHours = now.getHours();
    const messageMinutes = now.getMinutes();
    const messageOrigin = messageObj.fromMe ? "receiver" : "sender";
    const dateValues = messageObj.date;
    const timestampValues = messageObj.timestamp;
    const currentTime = dayjs();
    const tooltipTimerObj = dayjs(
      `${dateValues} ${timestampValues}`,
      "YYYY-MM-DD HH:mm"
    );
    const tooltipTimer = tooltipTimerObj.fromNow();

    const timerMessage = `${messageHours}:${messageMinutes}`;
    const timerMessageDiv = document.createElement("div");
    timerMessageDiv.textContent = timerMessage;
    timerMessageDiv.setAttribute("class", `${messageOrigin}TimerMessage`);

    const elementMessageDiv = document.createElement("div");
    elementMessageDiv.textContent = messageObj.text;
    elementMessageDiv.setAttribute("class", `${messageOrigin}ElementMessage`);
    elementMessageDiv.setAttribute("title", `${tooltipTimer}`);

    const messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", `${messageOrigin}MessageWrapper`);
    messageWrapper.appendChild(elementMessageDiv);
    messageWrapper.appendChild(timerMessageDiv);

    createSenderMessage(messageOrigin, messageObj);
    messageContainer.appendChild(messageWrapper);
  });
}

function createSenderMessage(messageOrigin, messageObj) {
  if (messageOrigin === "sender") {
    const senderMessageDiv = document.createElement("div");
    senderMessageDiv.textContent = messageObj.sender;
    senderMessageDiv.setAttribute("class", `${messageOrigin}TimerMessage`);

    const messageWrapper = document.createElement("div");
    messageWrapper.setAttribute("class", `${messageOrigin}MessageWrapper`);
    messageWrapper.appendChild(senderMessageDiv);

    messageContainer.appendChild(messageWrapper);

    // return senderMessageDiv;
  }

  return;
}
