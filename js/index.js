document.addEventListener('DOMContentLoaded', () => {
    // Safer particles.js initialization
    try {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#fff"
                },
                "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "https://galiacumple3.netlify.app/img/daisy.png",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 12,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 500,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,
                    "speed": 4,
                    "direction": "bottom",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 6,
                        "duration": 0.3,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } catch (error) {
        console.error('Error initializing particles.js:', error);
    }

    // Add error logging
    window.addEventListener('error', (event) => {
        console.error('Uncaught error:', event.error);
    });

    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            // Smooth scroll to next section
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Añadir efectos de hover a los elementos de detalle
    const detailItems = document.querySelectorAll('.hero-detail-item');
    detailItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Añadir efecto de parallax suave al mover el ratón
    const heroContent = document.querySelector('.hero-content');
    document.addEventListener('mousemove', (e) => {
        if (heroContent && window.innerWidth > 768) {
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;
            heroContent.style.transform = `translate(${x}px, ${y}px)`;
        } else if (heroContent && window.innerWidth <= 768) {
            // Efecto más sutil para dispositivos móviles
            const x = (window.innerWidth / 2 - e.clientX) / 100;
            const y = (window.innerHeight / 2 - e.clientY) / 100;
            heroContent.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    // Ajustar el número de partículas según el tamaño de la pantalla
    function adjustParticlesForScreenSize() {
        if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS) {
            const width = window.innerWidth;
            let particleCount = 200; // valor predeterminado
            
            if (width < 480) {
                particleCount = 100;
            } else if (width < 768) {
                particleCount = 150;
            }
            
            window.pJSDom[0].pJS.particles.number.value = particleCount;
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }

    // Ejecutar al cargar y al cambiar el tamaño de la ventana
    adjustParticlesForScreenSize();
    window.addEventListener('resize', adjustParticlesForScreenSize);
});