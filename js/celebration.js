document.addEventListener('DOMContentLoaded', () => {
    const mapsButton = document.getElementById('maps-button');
    const confirmAttendanceButton = document.getElementById('confirm-attendance');
    const moreInfoButton = document.getElementById('more-info');

    // Open Google Maps with predefined location
    if (mapsButton) {
        mapsButton.addEventListener('click', () => {
            const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Club+Ciclista+Juanico';
            window.open(mapsUrl, '_blank');
        });
    }

    // Confirm attendance
    if (confirmAttendanceButton) {
        confirmAttendanceButton.addEventListener('click', () => {
            // Simple confirmation alert, can be replaced with a modal or more sophisticated UI
            alert('¡Gracias por confirmar tu asistencia! Nos vemos en la fiesta de Galia.');
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