const allBtns = document.querySelectorAll(".btns");
const cart = document.getElementById("cart");
const totalElement = document.getElementById("totalPrice")
const total = totalElement.innerText;
const grandMoney = document.getElementById('grand-total-money');
const couponSection = document.getElementById('coupon-section');
const discountElement = document.getElementById('discountPrice');

for (let index = 0; index < allBtns.length; index++) {
  const btn = allBtns[index];
  const btnName = btn.innerText;
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
            this.classList.add('bg-green-500')

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



// validation for available seat counter
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



// add your seat to cart
let totalPrice = 0;
function addToCard(sitname) {
  const cartItem = document.createElement("tr");
  cartItem.innerHTML = `<tr>
  <td>${sitname}</td>
  <td>Economy</td>
  <td>550</td>
</tr>`;
  
  cart.appendChild(cartItem);
  
  totalPrice = calculator(cart.childElementCount);
  totalElement.innerText = totalPrice;
}




// total seat price calculator
function calculator(seatNumber){
  let totalPrice = 550 * seatNumber;
  return totalPrice;
}




// use Coupon Code and get discount
function getDiscount(){
  const couponInputElement = document.getElementById('coupon-input');
  const couponInput = couponInputElement.value;

  if(couponInput === 'NEW15'){
      const discount = totalPrice * (15/100);
      const grandTotal = totalPrice - discount;
      discountElement.innerText = discount;
      grandMoney.innerText = grandTotal;
      couponSection.classList.add('hidden')
      alert(`Congrates! You have got discount ${discount} Tk`);
  }
  else if(couponInput === 'Couple 20'){
      const discount = totalPrice * (20/100);
      const grandTotal = totalPrice - discount;
      discountElement.innerText = discount;
      grandMoney.innerText = grandTotal;
      couponSection.classList.add('hidden')
      alert(`Congrates! You have got discount ${discount} Tk`);
  }
  else{
      alert('Invalid Coupon Code!');
      return;
  }
  couponInputElement.value = '';
}

