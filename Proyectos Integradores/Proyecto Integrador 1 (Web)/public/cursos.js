// Hacer una solicitud GET a la ruta del servidor para obtener la lista de cursos
fetch('/cursos')
  .then((response) => response.json())
  .then((data) => {
    // El servidor devuelve la lista de cursos en el objeto "data"
    // Aquí debes actualizar tu página web para mostrar estos cursos
    const nftContainer = document.querySelector('.nft');

    data.forEach((curso) => {
      const item = document.createElement('div');
      item.classList.add('item');

      const img = document.createElement('img');
      img.classList.add('item-img');
      img.src = curso.imagen; // Asegúrate de que curso tenga una propiedad "imagen" con la URL de la imagen.

      const itemTitle = document.createElement('div');
      itemTitle.classList.add('item-title');

      const p = document.createElement('p');
      p.textContent = curso.nombre; // Asegúrate de que curso tenga una propiedad "nombre".

      const entrarButton = document.createElement('button');
      entrarButton.classList.add('item-button');
      entrarButton.textContent = 'Entrar';

      itemTitle.appendChild(p);
      itemTitle.appendChild(entrarButton);

      item.appendChild(img);
      item.appendChild(itemTitle);

      nftContainer.appendChild(item);
    });
  })
  .catch((error) => {
    console.error('Error al obtener la lista de cursos:', error);
  });
