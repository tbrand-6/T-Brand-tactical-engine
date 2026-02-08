const sendBtn = document.getElementById("sendBtn");
const inputBox = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");

sendBtn.addEventListener("click", async () => {
  const text = inputBox.value.trim();
  if (!text) return;

  chatBox.innerHTML += `<div class="message"><b>You:</b> ${text}</div>`;
  inputBox.value = "";
  chatBox.innerHTML += `<div class="message"><b>AI:</b> Thinking...</div>`;

  try {
    const response = await fetch("YOUR_BACKEND_URL/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    chatBox.innerHTML += `<div class="message"><b>AI:</b> ${data.reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    chatBox.innerHTML += `<div class="message"><b>AI:</b> Error connecting AI</div>`;
  }
});
