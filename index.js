window.onload = () => {

    const cifrando = document.getElementById("contenedor1");

    document.getElementById("botonOk").addEventListener("click", (accionCifrar) => {
        accionCifrar.preventDefault();
        let cifrar = document.getElementById("cifrado").value;
        let number = parseInt(document.getElementById("offset").value);

        cifrando.innerHTML = cipher.encode(cifrar, number)
    });

    const decifrando = document.getElementById("contenedor2");

    document.getElementById("botonOk2").addEventListener("click", (accionDecifrar) => {
        accionDecifrar.preventDefault();
        let decifrar = document.getElementById("decifrado").value;
        let numbers = parseInt(document.getElementById("offset2").value);

        decifrando.innerHTML = cipher.decode(decifrar, numbers)
    });

}

function reset() {
    document.getElementById("cifrado").value = "";
    document.getElementById("decifrado").value = "";
}

