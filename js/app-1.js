const allBtns = document.querySelectorAll(".btns");

for (let index = 0; index < allBtns.length; index++) {
  const btn = allBtns[index];
  const btnName = btn.innerText;
  console.log(btnName);
}


function addToCard(sitname) {
  const cartItem = document.createElement("tr");
  cartItem.innerHTML = `<tr>
  <td>${sitname}</td>
  <td>Economy</td>
  <td>550</td>
</tr>`;
  const parentElement = document.getElementById("cart");
  parentElement.appendChild(cartItem);
}


