let animationCount = 0;

function getAnimationMessage(count) {
  return `Discount revealed ${count} time(s)!`;
}

function animateBox() {
  const box = document.getElementById('special-box');
  const text = box.querySelector('.discount-text');
  box.classList.toggle('animated');

  if (box.classList.contains('animated')) {
    text.textContent = "🎁 20% OFF ALL DRINKS 🎁";
  } else {
    text.textContent = "🎉 Click to See Discount 🎉";
  }

  animationCount++;
  console.log(getAnimationMessage(animationCount));
}

function flipCard(cardElement) {
  cardElement.classList.toggle('flipped');
}

function toggleModal(show) {
  const modal = document.getElementById('offer-modal');
  modal.classList.toggle('show', show);
}

window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('page-content').classList.remove('hidden');
  }, 2000);
});

document.getElementById('animate-btn').addEventListener('click', animateBox);

document.querySelectorAll('.menu-item.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flipped');
  });
});
