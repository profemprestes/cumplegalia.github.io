document.addEventListener('DOMContentLoaded', () => {
    const mapsButton = document.getElementById('maps-button');
    const confirmAttendanceButton = document.getElementById('confirm-attendance');
    const moreInfoButton = document.getElementById('more-info');
    const rsvpModal = document.getElementById('rsvp-modal');
    const rsvpForm = document.getElementById('rsvp-form');

    // Open Google Maps with predefined location
    if (mapsButton) {
        mapsButton.addEventListener('click', () => {
            const mapsUrl = 'https://maps.app.goo.gl/sCwzNtgBekG2KZsT6';
            window.open(mapsUrl, '_blank');
        });
    }

    // Confirm attendance - Abrir modal
    if (confirmAttendanceButton && rsvpModal) {
        confirmAttendanceButton.addEventListener('click', () => {
            rsvpModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    }

    // Cerrar modal
    document.querySelectorAll('#rsvp-modal .modal-close, #rsvp-cancel').forEach(btn => 
        btn.addEventListener('click', () => { 
            rsvpModal.classList.add('hidden'); 
            document.body.style.overflow = ''; 
        }) 
    );

    // Manejar envío del formulario
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', e => { 
            e.preventDefault();
            
            const nameInput = document.getElementById('rsvp-name');
            const countInput = document.getElementById('rsvp-count');
            
            if (!nameInput || !countInput) {
                console.error('Elementos del formulario no encontrados');
                return;
            }

            const name = encodeURIComponent(nameInput.value.trim());
            const count = encodeURIComponent(countInput.value);
            
            if (!name || !count) {
                alert('Por favor, completa todos los campos');
                return;
            }

            const message = `¡Hola! Confirmamos asistencia al cumple de Galia. Nombre: ${decodeURIComponent(name)}, Cantidad: ${count} persona(s). ¡Nos vemos!`;
            const url = `https://api.whatsapp.com/send/?phone=59892475455&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
            
            window.open(url, '_blank');
            rsvpModal.classList.add('hidden');
            document.body.style.overflow = '';
            rsvpForm.reset();
        }); 
    }

    // More information
    if (moreInfoButton) {
        moreInfoButton.addEventListener('click', () => {
            // This could be replaced with more specific logic like scrolling to another section 
            // or opening a modal with additional details
            alert('Pronto tendremos más información disponible. ¡Mantente atento!');
        });
    }
});