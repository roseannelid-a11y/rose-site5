(() => {
  const dialog = document.querySelector('.lightbox');
  const dialogImage = dialog.querySelector('img');
  document.querySelectorAll('[data-photo]').forEach((button) => {
    button.addEventListener('click', () => {
      dialogImage.src = button.dataset.photo;
      dialogImage.alt = button.dataset.alt || 'Property photo';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    });
  });
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => {
    dialogImage.removeAttribute('src');
    dialogImage.alt = '';
  });
})();
