function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

/* PRICE CALCULATOR */
const serviceSelect = document.getElementById("service");
const lengthInput = document.getElementById("length");
const priceDisplay = document.getElementById("price");

function calculatePrice() {
  let price = 0;

  if (serviceSelect.value === "Custom Sewing") price = 15000;
  if (serviceSelect.value === "Bridal Wear") price = 60000;
  if (serviceSelect.value === "Alteration") price = 5000;

  if (lengthInput.value > 60) price += 5000;

  priceDisplay.textContent = `₦${price.toLocaleString()}`;
  return price;
}

serviceSelect.addEventListener("change", calculatePrice);
lengthInput.addEventListener("input", calculatePrice);

/* EMAIL + WHATSAPP */
document.getElementById("tailorForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const price = calculatePrice();

  const params = {
    name: name.value,
    phone: phone.value,
    service: service.value,
    bust: bust.value,
    waist: waist.value,
    hips: hips.value,
    length: length.value,
    note: note.value,
    price: price
  };

  emailjs.send("SERVICE_ID", "TEMPLATE_ID", params)
    .then(() => alert("Order sent successfully!"))
    .catch(() => alert("Email failed."));

  const msg = `
New Tailoring Order 👗

Name: ${name.value}
Phone: ${phone.value}
Service: ${service.value}
Estimated Price: ₦${price}

Measurements:
Bust: ${bust.value}
Waist: ${waist.value}
Hips: ${hips.value}
Length: ${length.value}

Notes:
${note.value}
`;

  window.open(
    `https://wa.me/2347044479079?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
});

/* 🔥 SCROLL REVEAL ANIMATION */
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();