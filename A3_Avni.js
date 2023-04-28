const audioPlayer = document.getElementById('background-music');

window.addEventListener('load', () => {
  audioPlayer.play();
});

window.addEventListener('scroll', () => {
  audioPlayer.pause();
});

window.addEventListener('mouseup', () => {
  audioPlayer.play();
});