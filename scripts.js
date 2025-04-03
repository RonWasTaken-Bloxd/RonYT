const videos = [
    // Add your video IDs here
    { id: 'VIDEO_ID_1', title: 'Video Title 1' },
    { id: 'VIDEO_ID_2', title: 'Video Title 2' },
    // Add more videos as needed
];

const videoGrid = document.querySelector('.video-grid');

videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video');
    videoElement.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${video.id}" frameborder="0" allowfullscreen></allowfullscreen></iframe>
        <div class="video-title">${video.title}</div>
    `;
    videoGrid.appendChild(videoElement);
});