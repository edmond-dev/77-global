const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-modal-close]');
console.log(openModalButtons)

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.moda);
    console.log(modal);
    openModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});


function openModal(modal) {
  if(modal == null) return;
  modal.classList.add('.modal');
}

function closeModal(modal) {
  if(modal == null) return;
  modal.classList.remove('add');
}
