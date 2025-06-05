function showTab(tabName) {
    document.getElementById('info').style.display = 'none';
    document.getElementById('memes').style.display = 'none';
    document.getElementById(tabName).style.display = 'block';

    document.getElementById('btn-info').classList.remove('active');
    document.getElementById('btn-memes').classList.remove('active');
    document.getElementById('btn-' + tabName).classList.add('active');
}
window.onload = () => showTab('info');

function openMemeModal(src) {
    const modal = document.getElementById("memeModal");
    const modalImg = document.getElementById("memeZoom");
    modal.style.display = "flex";
    modalImg.src = src;
  }

  function closeMemeModal() {
    document.getElementById("memeModal").style.display = "none";
  }