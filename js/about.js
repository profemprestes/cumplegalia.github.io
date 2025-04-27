document.addEventListener('DOMContentLoaded', function() {
    const openAboutBtn = document.getElementById('open-about-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeAboutBtn = aboutModal.querySelector('.modal-close');
    const copyButton = aboutModal.querySelector('.copy-button');
    const accountNumber = '001782901-00001';

    // Función para abrir el modal
    function openModal() {
        aboutModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    // Función para cerrar el modal
    function closeModal() {
        aboutModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Función para copiar el número de cuenta
    async function copyToClipboard() {
        try {
            await navigator.clipboard.writeText(accountNumber);
            const originalText = copyButton.innerHTML;
            copyButton.innerHTML = '<img src="public/icons/check.svg" class="h-4 w-4" alt="Copiado">';
            setTimeout(() => {
                copyButton.innerHTML = originalText;
            }, 2000);
        } catch (err) {
            console.error('Error al copiar:', err);
        }
    }

    // Event listeners
    openAboutBtn.addEventListener('click', openModal);
    closeAboutBtn.addEventListener('click', closeModal);
    copyButton.addEventListener('click', copyToClipboard);

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === aboutModal) {
            closeModal();
        }
    });

    // Cerrar modal con la tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !aboutModal.classList.contains('hidden')) {
            closeModal();
        }
    });
});