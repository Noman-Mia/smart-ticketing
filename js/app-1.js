const allBtns = document.querySelectorAll(".btns");

for (let index = 0; index < allBtns.length; index++) {
  const btn = allBtns[index];
  const btnName = btn.innerText;
  console.log(btnName);
}

// every click 1 will be (+)
const allButton =document.getElementsByClassName("btns"); 
let count= 0;
for(const btn of allButton){
    btn.addEventListener('click',function (e){
        count=count+1;
        document.getElementById("incress").innerText=count;
    })
}
// every click 1 will be (-)
const allBtn =document.getElementsByClassName("btns"); 
let cont= 8;
for(const btn of allBtn){
    btn.addEventListener('click',function (e){
        cont=cont-1;
        document.getElementById("dicress").innerText=cont;
    });
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


