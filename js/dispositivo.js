function detectarDispositivo() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        // Si no es un dispositivo móvil, redirigir a otra página (por ejemplo, 'pagina-pc.html')
        window.location.href = 'mantenimiento.html';
    }
}
// Llamar a la función de detección de dispositivo cuando se cargue la página
detectarDispositivo();