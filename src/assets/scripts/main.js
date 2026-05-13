import "@fontsource/ubuntu/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Form validation
const form = document.querySelector(".inscription-form");
if (form) {
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  });
}
