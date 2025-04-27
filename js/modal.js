document.addEventListener('DOMContentLoaded', function() {
    // RSVP Modal Elements
    const modal = document.getElementById('rsvp-modal');
    const openButton = document.getElementById('confirm-attendance');
    const closeButton = document.querySelector('.modal-close');
    const cancelButton = document.getElementById('rsvp-cancel');
    const form = document.getElementById('rsvp-form');

    // About Modal Elements
    const openAboutBtn = document.getElementById('open-about-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeAboutModalBtn = aboutModal ? aboutModal.querySelector('.modal-close') : null;

    // Message Modal Elements
    const openMessageBtn = document.getElementById('open-message-btn');
    const messageModal = document.getElementById('message-modal');
    const closeMessageModalBtn = messageModal ? messageModal.querySelector('.modal-close') : null;
    const cancelMessageBtn = document.getElementById('cancel-message-btn');

    function openModal(modal) {
        if (!modal) {
            console.error('Attempted to open a null modal');
            return;
        }
        modal.classList.remove('hidden');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (!modal) {
            console.error('Attempted to close a null modal');
            return;
        }
        modal.classList.remove('show');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // RSVP Modal Handlers
    if (openButton && modal && closeButton && cancelButton) {
        openButton.addEventListener('click', () => openModal(modal));
        closeButton.addEventListener('click', () => closeModal(modal));
        cancelButton.addEventListener('click', () => closeModal(modal));

        // Form submission handler for RSVP
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const name = document.getElementById('rsvp-name').value;
                const count = document.getElementById('rsvp-count').value;
                
                // Crear mensaje para WhatsApp
                const message = `¡Hola! Somos ${name} y confirmo la asistencia de ${count} persona(s) al cumpleaños de Galia.`;
                const encodedMessage = encodeURIComponent(message);
                
                // Número de WhatsApp
                const phoneNumber = '59892475455';
                
                // Abrir WhatsApp
                window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`);
                
                closeModal(modal);
                form.reset();
            });
        }
    }

    // About Modal Handlers
    if (openAboutBtn && aboutModal && closeAboutModalBtn) {
        openAboutBtn.addEventListener('click', () => openModal(aboutModal));
        closeAboutModalBtn.addEventListener('click', () => closeModal(aboutModal));
    }

    // Message Modal Handlers
    if (openMessageBtn && messageModal && closeMessageModalBtn && cancelMessageBtn) {
        openMessageBtn.addEventListener('click', () => openModal(messageModal));
        closeMessageModalBtn.addEventListener('click', () => closeModal(messageModal));
        cancelMessageBtn.addEventListener('click', () => closeModal(messageModal));
    }

    // Close modals if clicked outside of content
    const modals = [modal, aboutModal, messageModal].filter(Boolean);
    modals.forEach(modalElement => {
        if (modalElement) {
            modalElement.addEventListener('click', (event) => {
                if (event.target === modalElement) {
                    closeModal(modalElement);
                }
            });
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const openModal = document.querySelector('.modal.show');
            if (openModal) {
                closeModal(openModal);
            }
        }
    });

    // Error logging
    window.addEventListener('error', (event) => {
        console.error('Uncaught error:', event.error);
        console.error('Error details:', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
        });
    });
});
    // About Modal Elements
    const openAboutBtn = document.getElementById('open-about-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeAboutModalBtn = aboutModal ? aboutModal.querySelector('.modal-close') : null;

    // Message Modal Elements
    const openMessageBtn = document.getElementById('open-message-btn');
    const messageModal = document.getElementById('message-modal');
    const closeMessageModalBtn = messageModal ? messageModal.querySelector('.modal-close') : null;
    const cancelMessageBtn = document.getElementById('cancel-message-btn');

    function openModal(modal) {
        if (!modal) {
            console.error('Attempted to open a null modal');
            return;
        }
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (!modal) {
            console.error('Attempted to close a null modal');
            return;
        }
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // About Modal Handlers
    if (openAboutBtn && aboutModal && closeAboutModalBtn) {
        openAboutBtn.addEventListener('click', () => openModal(aboutModal));
        closeAboutModalBtn.addEventListener('click', () => closeModal(aboutModal));
    } else {
        console.warn('Some About Modal elements are missing');
    }

    // Message Modal Handlers
    if (openMessageBtn && messageModal && closeMessageModalBtn && cancelMessageBtn) {
        openMessageBtn.addEventListener('click', () => openModal(messageModal));
        closeMessageModalBtn.addEventListener('click', () => closeModal(messageModal));
        cancelMessageBtn.addEventListener('click', () => closeModal(messageModal));
    } else {
        console.warn('Some Message Modal elements are missing');
        
        // Log which specific elements are missing
        if (!openMessageBtn) console.warn('openMessageBtn not found');
        if (!messageModal) console.warn('messageModal not found');
        if (!closeMessageModalBtn) console.warn('closeMessageModalBtn not found');
        if (!cancelMessageBtn) console.warn('cancelMessageBtn not found');
    }

    // Close modal if clicked outside of content
    const modals = [aboutModal, messageModal].filter(Boolean);
    modals.forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        const openModal = document.querySelector('.modal.show');
        if (event.key === 'Escape' && openModal) {
            closeModal(openModal);
        }
    });

    // Form submission handler for Message Modal
    const messageForm = messageModal ? messageModal.querySelector('form') : null;
    if (messageForm) {
        messageForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(messageForm);

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                alert('¡Gracias por tu mensaje! Lo recibiremos pronto.');
                closeModal(messageModal);
                messageForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un problema enviando tu mensaje. Por favor, inténtalo de nuevo.');
            });
        });
    } else {
        console.warn('Message form not found');
    }

    // Comprehensive error logging
    window.addEventListener('error', (event) => {
        console.error('Uncaught error:', event.error);
        console.error('Error details:', {
            message: event.message,
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
        });
    });