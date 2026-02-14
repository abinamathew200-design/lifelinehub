// Load saved donors from localStorage
let donors = JSON.parse(localStorage.getItem("donors")) || [];

// ===== DONOR REGISTRATION =====
document.querySelector("#register form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value;
    const bloodGroup = this.bloodGroup.value;
    const phone = this.phone.value;
    const city = this.city.value;

    const newDonor = { name, bloodGroup, phone, city };
    donors.push(newDonor);

    localStorage.setItem("donors", JSON.stringify(donors));

    alert("Donor Registered Successfully ❤️");

    this.reset();
});

// ===== SEARCH BLOOD =====
document.querySelector("#search form").addEventListener("submit", function (e) {
    e.preventDefault();

    const bloodGroup = this.bloodGroup.value;
    const city = this.city.value;

    const results = donors.filter(donor =>
        donor.bloodGroup === bloodGroup &&
        donor.city.toLowerCase() === city.toLowerCase()
    );

    if (results.length === 0) {
        alert("No donors found ❌");
    } else {
        let message = "Available Donors:\n\n";
        results.forEach(donor => {
            message += `Name: ${donor.name}\nPhone: ${donor.phone}\n\n`;
        });
        alert(message);
    }

    this.reset();
});

// ===== EMERGENCY REQUEST =====
document.querySelector("#emergency form").addEventListener("submit", function (e) {
    e.preventDefault();

    alert("🚨 Emergency request sent!\nWe will contact matching donors.");

    this.reset();
});
