document.addEventListener("DOMContentLoaded", function () {
    const seatButtons = document.querySelectorAll(".btn");

    for (let i = 0; i < seatButtons.length; i++) {
        seatButtons[i].addEventListener("click", function () {
            if (!seatButtons[i].classList.contains("selected")) {
                seatButtons[i].classList.add("selected");
                updateAvailableSeats(-1);
            } else {
                seatButtons[i].classList.remove("selected");
                updateAvailableSeats(1);
            };
        });
    }

    function updateAvailableSeats(change) {
        const seatsLeftElement = document.querySelector("#seats-left");
        let seatsLeft = parseInt(seatsLeftElement.textContent);
        seatsLeft += change;
        seatsLeftElement.textContent = seatsLeft;
    }
});
