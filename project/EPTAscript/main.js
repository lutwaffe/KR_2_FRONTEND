function showProject(title) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalText').textContent =
    `Это подробная информация о проекте "${title}". Исходный код доступен на GitHub: https://github.com/lutwaffe`;
  modal.showModal();
}

function closeModal() {
  document.querySelectorAll('dialog').forEach(d => d.close());
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('successModal').showModal();
    contactForm.reset();
  });
}
