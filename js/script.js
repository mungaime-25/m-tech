const form = document.getElementById("contact-form");
const thankYou = document.getElementById("thankYou");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        thankYou.classList.remove("hidden");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    })
    .catch(() => {
      alert("Network error. Please check your connection.");
    });
});
