document.addEventListener('DOMContentLoaded', () => {
    const openMessageBtn = document.getElementById('open-message-btn');
    const messageModal = document.getElementById('message-modal');
    const closeMessageBtn = document.getElementById('close-message-btn');
    const cancelMessageBtn = document.getElementById('cancel-message-btn');

    function openModal() {
        messageModal.classList.remove('hidden');
        messageModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        messageModal.classList.remove('show');
        setTimeout(() => {
            messageModal.classList.add('hidden');
        }, 300);
        document.body.style.overflow = '';
    }

    // Open modal when button is clicked
    openMessageBtn.addEventListener('click', openModal);

    // Close modal when close or cancel button is clicked
    closeMessageBtn.addEventListener('click', closeModal);
    cancelMessageBtn.addEventListener('click', closeModal);

    // Close modal if clicked outside of content
    messageModal.addEventListener('click', (event) => {
        if (event.target === messageModal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && messageModal.classList.contains('show')) {
            closeModal();
        }
    });

    // Form submission handler
    const form = messageModal.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(() => {
            alert('¡Gracias por tu mensaje! Lo recibiremos pronto.');
            closeModal();
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un problema enviando tu mensaje. Por favor, inténtalo de nuevo.');
        });
    });
});

