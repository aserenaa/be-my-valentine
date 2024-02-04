// disable double click zoom on mobile
document.addEventListener('touchstart', function preventZoom(e) {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });


document.getElementById('noBtn').addEventListener('click', function() {
  const yesButton = document.getElementById('yesBtn');
  let scale = parseFloat(yesButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
  yesButton.style.transform = `scale(${scale + 0.1})`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
  document.querySelector('.message-container').style.display = 'none';
  document.querySelector('#askingGif').src = 'answer.gif';
});
