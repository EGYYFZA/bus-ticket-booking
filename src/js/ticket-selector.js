// Collapse Shadow Button
document.addEventListener("DOMContentLoaded", (event) => {
  let button = document.querySelectorAll(".collapse-btn");

  button.forEach((event) => {
    event.addEventListener("click", function () {
      let element = this.closest(".card").querySelector(".shadow-bottom");
      element.classList.toggle("collapse-shadow");
      element.classList.toggle("pb-4");
    });
  });
});

// Collapse Button Controller
document.addEventListener("DOMContentLoaded", function () {
  // Taing All of 'collapse-btn' class
  let collapseButtons = document.querySelectorAll(".collapse-btn");

  // iterate through each button
  collapseButtons.forEach(function (button) {
    // Add event listener for 'click' event for each button
    button.addEventListener("click", function () {
      // Mengecek apakah collapse terbuka atau tertutup
      let isExpanded = this.getAttribute("aria-expanded") === "true";

      // Changes text button besides collapse status
      this.textContent = isExpanded ? "Sembunyikan Tempat Duduk" : "Lihat Tempat Duduk";
    });
  });
});

// Seat Selector
function generateSeatSelector(container, inputId) {
  let seats = document.getElementById(container);
  let ticketID = inputId;

  for (let i = 1; i < 30; i++) {
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "booked" : "";
    let disableInput = randint === 1 ? "disabled" : "";

    // Make str for buss seats structure
    let element =
      '<input type="radio" name="' +
      ticketID +
      '" id="' +
      ticketID +
      (i + 1) +
      '" ' +
      disableInput +
      ' class="d-none" /><label for="' +
      ticketID +
      (i + 1) +
      '" class="seat ' +
      booked +
      ' font-12">' +
      (i + 1) +
      "</label>";

    // Insert the seats element onto page
    seats.insertAdjacentHTML("beforeend", element);
  }
}

// Function Generate Seat Number for Detail Ticket
function seatNumberGenerator(elementName) {
  document.addEventListener("DOMContentLoaded", () => {
    // Taking all form with .ticket-selection-form class
    let forms = document.querySelectorAll(".ticket-selection-form");
    let name = elementName;

    // Add addEventListener for each form
    forms.forEach((form) => {
      form.addEventListener("change", (event) => {
        if (event.target.type === "radio" && event.target.name === name) {
          // Take element .seat-number which is in the same form as the selected radio input
          let bussSeatNumber = form.querySelector(".seat-number");

          // Updates the contents of the .seat-number element with the value of the selected radio button
          if (bussSeatNumber) {
            bussSeatNumber.textContent = event.target.nextElementSibling.textContent;
            localStorage.setItem("bussSeatNumber", event.target.nextElementSibling.textContent);
          }
        }
      });
    });
  });
}

const userIdentity = {
  fullname: "Ego Widiarto",
  ktpNumber: "3503081802040001",
  ages: 20,
  phoneNumber: "081234567890",
  identityType: "KTP",
};

// Fungsi untuk mengisi form dengan data dari object userIdentity
function fillIdentityForm() {
  document.getElementById("full-name").value = userIdentity.fullname;
  document.getElementById("identity").value = userIdentity.ktpNumber;
  document.getElementById("age").value = userIdentity.ages;
  document.getElementById("contact").value = userIdentity.phoneNumber;

  // Menemukan dan memilih opsi KTP di tag <select>
  var selectElement = document.getElementById("identity-type");
  for (var i = 0; i < selectElement.options.length; i++) {
    if (selectElement.options[i].text === userIdentity.identityType) {
      selectElement.selectedIndex = i;
      break;
    }
  }
}
