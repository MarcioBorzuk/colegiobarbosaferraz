// Lista de vídeos do Terceiro DS (troque os caminhos para o 4º Informática conforme necessário)
const videos = [
    { thumbnail: 'thumbnail1.jpg', src: 'video1.mp4', title: 'Trabalho de João' },
    { thumbnail: 'thumbnail2.jpg', src: 'video2.mp4', title: 'Trabalho de Maria' },
    // Adicione mais vídeos conforme necessário
];

// Carrega a galeria de vídeos
const galleryGrid = document.getElementById('video-gallery');
videos.forEach(video => {
    const videoThumbnail = document.createElement('div');
    videoThumbnail.classList.add('video-thumbnail');
    
    const img = document.createElement('img');
    img.src = video.thumbnail;
    img.alt = video.title;
    videoThumbnail.appendChild(img);

    // Evento para abrir a modal com o vídeo
    videoThumbnail.addEventListener('click', () => openModal(video.src));

    galleryGrid.appendChild(videoThumbnail);
});

// Função para abrir a modal com o vídeo
function openModal(videoSrc) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    closeBtn.innerText = '×';
    closeBtn.addEventListener('click', () => modal.remove());
    modal.appendChild(closeBtn);

    const videoElement = document.createElement('video');
    videoElement.classList.add('modal-content');
    videoElement.src = videoSrc;
    videoElement.controls = true;
    videoElement.autoplay = true;
    modal.appendChild(videoElement);

    document.body.appendChild(modal);
}
