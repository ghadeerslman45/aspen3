document.querySelectorAll(".rect").forEach(rect => {
  const column = rect.querySelector(".img-column");
  if (!column) return;

  const imgs = column.querySelectorAll("img");
  const slideHeight = rect.clientHeight;
  let index = 0;

  setInterval(() => {
    index++;

    if (index >= imgs.length) {
      column.style.transition = "none";
      column.style.transform = "translateY(0)";
      index = 0;

      column.offsetHeight; // force reflow
      column.style.transition = "transform 0.6s ease-in-out";
    } else {
      column.style.transform = `translateY(-${index * slideHeight}px)`;
    }
  }, 2000);
});






const titleItems = document.querySelectorAll('.title-item');

function closeAllDetails() {
  document.querySelectorAll('.details').forEach(d => {
    d.style.maxHeight = null;
    d.classList.remove('is-open');
  });
}

titleItems.forEach(item => {
  const trigger = item.querySelector('.title-item-triggger');
  const details = item.querySelector('.details');

  /* 🔹 TOGGLE ON TITLE CLICK */
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isOpen = details.classList.contains('is-open');

    closeAllDetails();

    if (!isOpen) {
      details.classList.add('is-open');
      details.style.maxHeight = details.scrollHeight + 'px';
    }
  });

  /* 🔹 CLOSE WHEN CLICKING DETAILS ITSELF */
  details.addEventListener('click', (e) => {
    e.stopPropagation();
    details.style.maxHeight = null;
    details.classList.remove('is-open');
  });
});

/* 🔹 OPTIONAL: CLICK OUTSIDE CLOSES EVERYTHING */
document.addEventListener('click', () => {
  closeAllDetails();
});




