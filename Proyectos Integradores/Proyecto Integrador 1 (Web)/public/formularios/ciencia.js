var puntuacion = 0;

function respuesta(p, r) {
    if (p == 0 && r == 1) {
        puntuacion += 1;
    } else if (p == 1 && r == 4) {
        puntuacion += 1;
    } else if (p == 2 && r == 3) {
        puntuacion += 1;
    } else if (p == 3 && r == 3) {
        puntuacion += 1;
    } else if (p == 4 && r == 2) {
        puntuacion += 1;
    } else if (p == 5 && r == 3) {
        puntuacion += 1;
    } else if (p == 6 && r == 1) {
        puntuacion += 1;
    } else if (p == 7 && r == 2) {
        puntuacion += 1;
    } else if (p == 8 && r == 2) {
        puntuacion += 1;
    } else if (p == 9 && r == 4) {
        puntuacion += 1;
    } else if (p == 10 && r == 3) {
        puntuacion += 1;
    } else if (p == 11 && r == 2) {
        puntuacion += 1;
    } else if (p == 12 && r == 3) {
        puntuacion += 1;
    } else if (p == 13 && (r == 3 || r == 4)) {
        puntuacion += 1;
    } else if (p == 14 && r == 2) {
        puntuacion += 1;
    }
}

function Resultados() {
    if (puntuacion > 10) {
        alert('Has Aprobado!!!');
    } else {
        alert('Has Reprobado!!!');
    }
        window.location.href = '/perfil';
}

