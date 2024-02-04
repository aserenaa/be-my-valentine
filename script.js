document.getElementById('noBtn').addEventListener('click', function() {
  const yesButton = document.getElementById('yesBtn');
  let scale = parseFloat(yesButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
  yesButton.style.transform = `scale(${scale + 0.1})`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
  document.querySelector('.container').style.display = 'none';
  document.getElementById('responseGifContainer').style.display = 'block';
});
