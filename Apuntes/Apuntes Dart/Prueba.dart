import 'dart:io';
import 'dart:math';

void main() {
  print('¡Bienvenido al juego de adivinanzas!');
  print('Estoy pensando en un número entre 1 y 100.');

  int numeroAleatorio = generarNumeroAleatorio();
  bool adivinado = false;
  int intentos = 0;

  while (!adivinado) {
    stdout.write('Tu suposición: ');
    String entrada = stdin.readLineSync()!;
    int suposicion = int.tryParse(entrada) ?? 0;

    if (suposicion == numeroAleatorio) {
      adivinado = true;
      print('¡Correcto! Has adivinado en $intentos intentos.');
    } else if (suposicion < numeroAleatorio) {
      print('Demasiado bajo. Intenta de nuevo.');
    } else {
      print('Demasiado alto. Intenta de nuevo.');
    }

    intentos++;
  }
}

int generarNumeroAleatorio() {
  Random random = Random();
  return random.nextInt(100) + 1;
}
