$('document').ready(function() {
    customScripts.init();
    $('.carousel').carousel();
});

$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000, 'easeInOutQuart'); // Cambia la curva de animación a easeInOutQuart
        }
    });
});
// Manejador de envío del formulario de contacto
$("#contactForm").submit(function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores del formulario
    var formData = $(this).serialize();

    // Enviar la solicitud AJAX
    $.ajax({
        type: "POST",
        url: "contact_me.php",
        data: formData,
        dataType: "json",
        success: function(response) {
            // Mostrar un mensaje de éxito o error
            if (response.status === "success") {
                $("#contactForm")[0].reset(); // Restablecer el formulario
                alert(response.message);
            } else {
                alert(response.message);
            }
        },
        error: function() {
            alert("Lo sentimos, ocurrió un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.");
        }
    });
});