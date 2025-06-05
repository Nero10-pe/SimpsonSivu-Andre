const messages = [
    {
      "sender": "mr customer",
      "date": "2010-05-10",
      "title": "looking for someone",
      "body": "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
      "sender": "Moe",
      "date": "2010-05-10",
      "title": "re: looking for someone",
      "body": "Let's ask around. What's his name?"
    },
    {
      "sender": "mr customer",
      "date": "2010-05-10",
      "title": "re: looking for someone",
      "body": "Yeah, his name is Seymore Butz."
    },
    {
      "sender": "Moe",
      "date": "2010-05-10",
      "title": "re: looking for someone",
      "body": "Is there a Butz here? Everybody! I wanna Seymore Butz!"
    },
    {
      "sender": "Barney",
      "date": "2010-05-10",
      "title": "re: looking for someone",
      "body": "LOL"
    },
    {
      "sender": "Moe",
      "date": "2010-05-10",
      "title": "re: looking for someone",
      "body": "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
    },
    {
      "sender": "mr customer",
      "date": "2010-05-10",
      "title": "re: looking for someone",
      "body": "😂😂😂😂😂😂😂😂😂😂😂"
    }
  ];
  function renderMessages() {
    const container = document.getElementById("messageList");
    container.innerHTML = "";
    messages.forEach(msg => {
      container.innerHTML += `
        <div class="message relleno">
          <p><strong>${msg.sender}</strong> - ${msg.date}</p>
          <h4>${msg.title}</h4>
          <p>${msg.body}</p>
        </div>
      `;
    });
  } 
  document.addEventListener("DOMContentLoaded", () => {
    const dialog = document.getElementById("messageDialog");
    const form = document.getElementById("messageForm");  
    document.getElementById("newMessageBtn").addEventListener("click", () => {
      dialog.showModal();
    });
    document.getElementById("cancelBtn").addEventListener("click", () => {
        dialog.close();
    });
    form.addEventListener("submit", () => {
      const name = document.getElementById("senderName").value.trim();
      const title = document.getElementById("messageTitle").value.trim();
      const content = document.getElementById("messageContent").value.trim();
      const date = new Date().toLocaleDateString("fi-FI");
      if (name && title && content) {
        messages.unshift({ name, title, content, date }); 
        renderMessages();
      }
      form.reset();
      dialog.close();
    });
    renderMessages();
  });
  
  