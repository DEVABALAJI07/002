function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("/contact", {
    method: "POST",
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("response").innerText = data.message;
    this.reset();
  });
});
function openCallPopup() {
  document.getElementById("callPopup").style.display = "block";
}

function closeCallPopup() {
  document.getElementById("callPopup").style.display = "none";
}
