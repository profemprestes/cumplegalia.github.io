document.addEventListener('DOMContentLoaded', () => {
    const openMessageBtn = document.getElementById('open-message-btn');
    const messageModal = document.getElementById('message-modal');
    const closeMessageBtn = messageModal ? messageModal.querySelector('.modal-close') : null;
    const cancelMessageBtn = document.getElementById('cancel-message-btn');
    const form = messageModal ? messageModal.querySelector('form') : null;

    // Only proceed if we have the required elements
    if (!messageModal || !openMessageBtn) {
        console.warn('Required message modal elements not found');
        return;
    }

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
    if (closeMessageBtn) closeMessageBtn.addEventListener('click', closeModal);
    if (cancelMessageBtn) cancelMessageBtn.addEventListener('click', closeModal);

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
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('¡Gracias por tu mensaje! Lo recibiremos pronto.');
            closeModal();
            form.reset();
        });
    }
});