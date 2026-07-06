const companyPhone = "966567300158";

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");
const whatsappLinks = document.querySelectorAll(".whatsapp-link");
const callLinks = document.querySelectorAll(".call-link");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function normalizePhone(phone) {
  return phone.replace(/[^\d]/g, "");
}

function missingPhone(event) {
  event.preventDefault();
  alert("رقم الهاتف غير متاح حاليًا. يرجى المحاولة لاحقًا.");
}

const cleanPhone = normalizePhone(companyPhone);

if (cleanPhone) {
  callLinks.forEach((link) => {
    link.href = `tel:+${cleanPhone}`;
  });
  whatsappLinks.forEach((link) => {
    const message = encodeURIComponent(link.dataset.message || "");
    link.href = `https://wa.me/${cleanPhone}?text=${message}`;
  });
} else {
  callLinks.forEach((link) => link.addEventListener("click", missingPhone));
  whatsappLinks.forEach((link) => link.addEventListener("click", missingPhone));
}
