void main() {
  // Cambiamos la entrada por consola con una entrada directa en el código
  int numero = obtenerNumeroDesdeUsuario();

  if (esPrimo(numero)) {
    print("$numero es un número primo.");
  } else {
    print("$numero no es un número primo.");
  }

  if (esPar(numero)) {
    print("$numero es un número par.");
  } else {
    print("$numero es un número impar.");
  }
}

int obtenerNumeroDesdeUsuario() {
  // valor predeterminado para Dart, tambien se puede usar en dartpad
  return 17;
}

bool esPrimo(int numero) {
  if (numero < 2) {
    return false;
  }

  for (int i = 2; i <= numero / 2; i++) {
    if (numero % i == 0) {
      return false;
    }
  }

  return true;
}

bool esPar(int numero) {
  return numero % 2 == 0;
}