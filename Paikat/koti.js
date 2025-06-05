
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");

  function openModal(src) {
    modal.style.display = "flex";
    modalImg.src = src;
  }

  function closeModal() {
    modal.style.display = "none";
    modalImg.src = "";
  }

  window.addEventListener("DOMContentLoaded", () => {
    modal.style.display = "none";
    modalImg.src = "";
  });



