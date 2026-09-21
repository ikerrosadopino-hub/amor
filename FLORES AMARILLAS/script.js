/* =====================================================
   ELEMENTOS
===================================================== */

const intro =
    document.getElementById("intro");

const abrir =
    document.getElementById("abrir");

const continuar =
    document.getElementById("continuar");

const audio =
    document.getElementById("audio");

const botonMusica =
    document.getElementById("musica");

const petalos =
    document.getElementById("petalos");

const corazones =
    document.getElementById("corazones");

const estrellas =
    document.getElementById("estrellas");


/* =====================================================
   CREAR ESTRELLAS
===================================================== */

function crearEstrellas() {

    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const estrella =
            document.createElement("div");

        estrella.className =
            "estrella";

        estrella.style.left =
            Math.random() * 100 + "%";

        estrella.style.top =
            Math.random() * 80 + "%";

        estrella.style.animationDelay =
            Math.random() * 3 + "s";

        estrellas.appendChild(
            estrella
        );
    }
}

crearEstrellas();


/* =====================================================
   PASO 1:
   ABRIR EL SOBRE
===================================================== */

abrir.addEventListener(
    "click",
    function () {

        console.log(
            "Sobre abierto 💌"
        );


        /*
         * Añadimos la clase.
         *
         * CSS se encarga de:
         *
         * - girar la solapa
         * - esconder el corazón
         * - mover el sobre
         * - mostrar la carta
         */

        intro.classList.add(
            "sobre-abierto"
        );

    }
);


/* =====================================================
   PASO 2:
   CONTINUAR
===================================================== */

continuar.addEventListener(
    "click",
    function () {

        console.log(
            "Continuando hacia las flores 🌻"
        );


        /*
         * Desaparece la introducción.
         */

        document.body.classList.add(
            "final-activa"
        );


        /*
         * Empezamos los efectos.
         */

        iniciarPetalos();

        iniciarCorazones();


        /*
         * Música.
         *
         * El usuario acaba de pulsar
         * un botón, por lo que intentamos
         * reproducirla aquí.
         */

        if (audio) {

            audio.volume = 0.35;

            audio.play().catch(
                function () {

                    console.log(
                        "La música no pudo reproducirse automáticamente."
                    );

                }
            );

        }

    }
);


/* =====================================================
   CREAR PÉTALO
===================================================== */

function crearPetalo() {

    const petalo =
        document.createElement("div");

    petalo.className =
        "petalo-caida";

    petalo.textContent =
        "🌼";


    petalo.style.left =
        Math.random() * 100 + "vw";


    petalo.style.fontSize =
        (
            12 +
            Math.random() * 18
        ) + "px";


    petalo.style.setProperty(
        "--movimiento",

        (
            -100 +
            Math.random() * 200
        ) + "px"
    );


    const duracion =
        5 +
        Math.random() * 7;


    petalo.style.animationDuration =
        duracion + "s";


    petalos.appendChild(
        petalo
    );


    setTimeout(
        function () {

            petalo.remove();

        },

        (duracion + 1) * 1000
    );

}


/* =====================================================
   INICIAR PÉTALOS
===================================================== */

function iniciarPetalos() {


    /*
     * Algunos aparecen inmediatamente.
     */

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        setTimeout(
            crearPetalo,
            i * 250
        );

    }


    /*
     * Después siguen cayendo.
     */

    setInterval(
        crearPetalo,
        650
    );

}


/* =====================================================
   CREAR CORAZÓN
===================================================== */

function crearCorazon() {

    const corazon =
        document.createElement("div");

    corazon.className =
        "corazon-flotante";

    corazon.textContent =
        "♥";


    corazon.style.left =
        Math.random() * 100 + "vw";


    corazon.style.fontSize =
        (
            12 +
            Math.random() * 20
        ) + "px";


    corazon.style.setProperty(
        "--x",

        (
            -80 +
            Math.random() * 160
        ) + "px"
    );


    const duracion =
        6 +
        Math.random() * 6;


    corazon.style.animationDuration =
        duracion + "s";


    corazones.appendChild(
        corazon
    );


    setTimeout(
        function () {

            corazon.remove();

        },

        duracion * 1000
    );

}


/* =====================================================
   INICIAR CORAZONES
===================================================== */

function iniciarCorazones() {

    setInterval(
        crearCorazon,
        1800
    );

}


/* =====================================================
   BOTÓN DE MÚSICA
===================================================== */

botonMusica.addEventListener(
    "click",
    function () {

        if (
            audio.paused
        ) {

            audio.play();

            botonMusica.textContent =
                "♫";

        }

        else {

            audio.pause();

            botonMusica.textContent =
                "🔇";

        }

    }
);
