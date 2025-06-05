
document.addEventListener('DOMContentLoaded', () => {
    const newMessageBtn = document.getElementById('newMessageBtn');
    const messageDialog = document.getElementById('messageDialog');
    const cancelBtn = document.getElementById('cancelBtn');
    const messageForm = document.getElementById('messageForm');
    const messageList = document.getElementById('messageList');

    const messages = [];
    
    newMessageBtn.addEventListener('click', () => {
        messageDialog.showModal();
    });

    cancelBtn.addEventListener('click', () => {
        messageDialog.close();
    });

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('senderName').value.trim();
        const title = document.getElementById('messageTitle').value.trim();
        const content = document.getElementById('messageContent').value.trim();
        const date = new Date().toLocaleDateString('fi-FI');

        if (name && title && content) {
            messages.unshift({ name, title, content, date });
            updateMessageList();
            messageDialog.close();
            messageForm.reset();
        }
    });

    function updateMessageList() {
        messageList.innerHTML = '';
        messages.forEach(msg => {
            const div = document.createElement('div');
            div.className = 'message-box';
            div.innerHTML = `
                <p><strong>${msg.name}</strong> - ${msg.date}</p>
                <p><strong>${msg.title}</strong></p>
                <p>${msg.content}</p>
                <hr>
            `;
            messageList.appendChild(div);
        });
    }
});
