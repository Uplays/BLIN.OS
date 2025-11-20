// script.js

// Usamos el evento 'DOMContentLoaded' para asegurar que el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // ====================================
    // 1. MANEJO CENTRAL DE ACCESO BETA (Entretenido)
    // ====================================
    const BETA_URL = 'https://simu-os-studio.lovable.app/';
    
    const handleBetaAccess = (event) => {
        event.preventDefault(); 
        
        // Mensaje más detallado y atractivo
        const isConfirmed = confirm('🎉 ¡Bienvenido al futuro! \n\nEl acceso a la beta te redirigirá al "BLIN OS Studio Simulator" para que pruebes la interfaz de inmediato. \n\n¿Quieres continuar?');
        
        if (isConfirmed) {
            // Se puede añadir un pequeño delay para un efecto visual antes de la redirección
            setTimeout(() => {
                window.open(BETA_URL, '_blank'); // Abrir en una nueva pestaña para no perder la landing
            }, 300);
            
        } else {
            // Muestra un mensaje amigable
            console.log('Acceso beta cancelado. ¡Esperamos verte pronto!');
            alert('¡No hay problema! Puedes volver cuando quieras. 😊');
        }
    };

    // Asignar la función a todos los elementos de Acceso Beta
    const betaTriggers = document.querySelectorAll('#beta-btn, .cta-link');
    betaTriggers.forEach(button => {
        button.addEventListener('click', handleBetaAccess);
    });

    // Añadir el manejador al botón "Descubre BLIN" para ir a Características (Didáctico)
    const mainCta = document.getElementById('main-cta-btn');
    if (mainCta) {
        mainCta.addEventListener('click', (e) => {
            e.preventDefault();
            // Desplazamiento suave a la sección de Características
            document.querySelector('#caracteristicas').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // ====================================
    // 2. IMPLEMENTACIÓN DE SCROLL SUAVE (Detallista)
    // ====================================
    document.querySelectorAll('#navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeight = document.getElementById('navbar').offsetHeight;

            if (targetElement) {
                // Desplazamiento ajustado para la altura de la barra de navegación (Más profesional)
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight - 20, // 20px de margen extra
                    behavior: 'smooth'
                });
            }
        });
    });

    // ====================================
    // 3. EFECTO DE BARRA DE NAVEGACIÓN EN SCROLL (Profesional)
    // ====================================
    const navBar = document.getElementById('navbar');
    const scrollThreshold = 80; // Píxeles de scroll antes de aplicar el estilo
    
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            // Usar una clase CSS para manejar los estilos (más limpio y eficiente)
            navBar.classList.add('scrolled');
        } else {
            navBar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar al cargar para manejar la recarga en posición de scroll
    handleScroll(); 
});