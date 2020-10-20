const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
const overlay1 = document.getElementById('overlaySec');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest(`.modal, .modal-content-events,
    .modal-content-deals, .modal-content-travel, .modal-content-post`);
    closeModal(modal);
  });
});


function openModal(modal) {
  if(modal == null) return;
  modal.classList.add('active');
  if(overlay != null) {
    overlay.classList.add('active');
  } else if (overlay1 != null) {
    overlay1.classList.add('active');
  } else {
    return
  }

}

function closeModal(modal) {
  if(modal == null) return;
  modal.classList.remove('active');
  if(overlay != null) {
    overlay.classList.remove('active');
  } else if (overlay1 != null) {
    overlay1.classList.remove('active');
  } else {
    return
  }
}
