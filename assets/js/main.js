$(function () {

    /* Smooth Scroll: Se utiliza para dar desplazamiento suave a la sección que se le de click en el menú del Navbar */
    $("a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top

            }, 1000, function () {
                window.location.hash = gato;
            })
        }
    });

    /* Tooltip: Se utiliza para mostrar un mensaje colocando el cursor en el h3 ubicado en el footer */
    $('[data-toggle="tooltip"]').tooltip()

    /* Popover: Se utiliza para mostrar un mensaje dando click en los iconos de font awesome en la sección Quienes Somos */
    $('[data-toggle="popover1"]').popover();
    $('[data-toggle="popover2"]').popover();
    $('[data-toggle="popover3"]').popover();

});
