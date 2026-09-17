const revealButton = document.querySelector('#revealButton');
const closeButton = document.querySelector('#closeButton');
const wishPanel = document.querySelector('#wishPanel');

function openWish() {
  wishPanel.classList.add('is-open');
  wishPanel.setAttribute('aria-hidden', 'false');
  revealButton.setAttribute('aria-expanded', 'true');
  wishPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function closeWish() {
  wishPanel.classList.remove('is-open');
  wishPanel.setAttribute('aria-hidden', 'true');
  revealButton.setAttribute('aria-expanded', 'false');
  revealButton.focus();
}

revealButton.addEventListener('click', openWish);
closeButton.addEventListener('click', closeWish);
