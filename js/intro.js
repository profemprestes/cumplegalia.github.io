document.addEventListener('DOMContentLoaded', () => {
    // Safer particles.js initialization
    try {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 400,
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
                    "value": 0.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 10,
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
                    "speed": 6,
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
                        "size": 4,
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

    // Safer stats.js setup
    try {
        var count_particles = document.querySelector('.js-count-particles');
        var stats = new Stats();
        
        if (count_particles && stats) {
            stats.setMode(0);
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';
            document.body.appendChild(stats.domElement);

            function update() {
                if (stats) {
                    stats.begin();
                    stats.end();
                }
                
                if (window.pJSDom && window.pJSDom[0] && window.pJSDom[0].pJS && 
                    window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
                }
                
                requestAnimationFrame(update);
            }

            requestAnimationFrame(update);
        }
    } catch (error) {
        console.error('Error setting up stats:', error);
    }

    // Gallery functionality
    const galleryImages = document.querySelectorAll('.gallery-image');
    const continueBtn = document.getElementById('continue-btn');
    let currentImageIndex = 0;

    function changeImage() {
        if (galleryImages.length > 0) {
            galleryImages[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            galleryImages[currentImageIndex].classList.add('active');
        }
    }

    // Auto-slider cada 4 segundos
    setInterval(changeImage, 4000);

    // Botón de continuar
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});