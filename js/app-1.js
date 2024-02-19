const allBtns = document.querySelectorAll(".btns");
const cart = document.getElementById("cart");

for (let index = 0; index < allBtns.length; index++) {
  const btn = allBtns[index];
  const btnName = btn.innerText;
  console.log(btnName);
}
  
//validation
const allButton = document.getElementsByClassName("btns");
let count = 0;
const selectedSeats = new Set();

for (const btn of allButton) {
    btn.addEventListener('click', function (e) {
        const seatNumber = this.innerText;
        
        if (!selectedSeats.has(seatNumber)) { 
            selectedSeats.add(seatNumber); 
            count = count + 1;
            document.getElementById("incress").innerText = count;

            if (count >= 4) { 
                for (const btn of allButton) {
                    btn.disabled = true;
                    
                }
            }
        } else {
            alert("You have already selected this seat.");
        }
    });
}



// validation 
const allBtn = document.getElementsByClassName("btns");
let cont = 8;

for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        if (cont > 0) {
            cont = cont - 1;
            document.getElementById("dicress").innerText = cont;
        } else {
            alert ("Seat not available. Please try next time.");
        }
    });
}


function addToCard(sitname) {
  const cartItem = document.createElement("tr");
  cartItem.innerHTML = `<tr>
  <td>${sitname}</td>
  <td>Economy</td>
  <td>550</td>
</tr>`;
  
  cart.appendChild(cartItem);
  
  let totalPrice = calculator(cart.childElementCount);
  const total = document.getElementById("totalPrice");
  total.innerText = totalPrice;
}

function calculator(seatNumber){
  let totalPrize = 550 * seatNumber;
  return totalPrize;
}

