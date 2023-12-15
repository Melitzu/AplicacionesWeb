let selectedItems = [];

  function selectItem(itemName, itemPrice) {
    const quantity = prompt(`¿Cuántos ${itemName} desea comprar?`, '1');
    if (quantity !== null && !isNaN(quantity) && parseInt(quantity) > 0) {
      const total = itemPrice * parseInt(quantity);
      selectedItems.push({ name: itemName, total: total });
      updateOrderSummary();
    } else {
      alert('Por favor, ingrese una cantidad válida.');
    }
  }
  function updateOrderSummary() {
    const orderSummaryDiv = document.getElementById('order-summary');
    orderSummaryDiv.innerHTML = '<h2>Resumen de su Pedido</h2>';
    
    let netTotal = 0;

    for (const item of selectedItems) {
      orderSummaryDiv.innerHTML += `<p>${item.name}: $${item.total.toFixed(2)}</p>`;
      netTotal += item.total;
    }

    const iva = netTotal * 0.19;
    const totalAmount = netTotal + iva;

    orderSummaryDiv.innerHTML += `<p>Valor Neto: $${netTotal.toFixed(2)}</p>`;   //Costo neto del producto
    orderSummaryDiv.innerHTML += `<p>IVA (19%): $${iva.toFixed(2)}</p>`;   //Porcentaje del valor con IVA
    orderSummaryDiv.innerHTML += `<p>Total a Pagar: $${totalAmount.toFixed(2)}</p>`;  //Valor del producto Total (I)
  }
totalamou
  function calculateOrder() {
    if (selectedItems.length === 0) {
      alert('Se necesita que escogas un producto para poder calcular el valor total');
    } else {
      updateOrderSummary();
    }
  }