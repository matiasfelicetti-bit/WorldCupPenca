// Crear grupo
function crearGrupo() {

    let nombre = document.getElementById("nombreGrupo").value;

    if (nombre === "") {
        alert("Ingresa un nombre para el grupo");
        return;
    }

    let codigo = Math.floor(100000 + Math.random() * 900000);

    let grupo = {
        nombre: nombre,
        codigo: codigo,
        jugadores: []
    };

    localStorage.setItem("grupo_" + codigo, JSON.stringify(grupo));

    document.getElementById("grupoCreado").innerHTML = `
        <div class="grupo">
            <h3>${nombre}</h3>
            <p>Código del grupo:</p>
            <h1>${codigo}</h1>
        </div>
    `;
}

// Unirse a un grupo
function unirseGrupo() {

    let codigo = document.getElementById("codigoGrupo").value;

    let grupo = localStorage.getItem("grupo_" + codigo);

    if (grupo) {
        alert("¡Te uniste al grupo!");
    } else {
        alert("Grupo no encontrado");
    }
}

// Agregar puntos
function agregarPuntos(usuario, puntos) {

    let ranking = JSON.parse(localStorage.getItem("ranking")) || [];

    ranking.push({
        usuario: usuario,
        puntos: puntos
    });

    ranking.sort((a, b) => b.puntos - a.puntos);

    localStorage.setItem("ranking", JSON.stringify(ranking));
}