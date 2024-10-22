// Função para abrir o modal com a imagem ampliada
function openImageOnClick() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    const closeImageBtn = document.querySelector('.close-image');
  
    galleryItems.forEach((image) => {
        image.addEventListener('click', function () {
            modal.style.display = 'block';
            modalImg.src = this.getAttribute('src');
        });
    });
  
    closeImageBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });
  
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
  }
  
  // Função para abrir o modal com o vídeo ampliado
  function openVideoOnClick() {
    const galleryVideos = document.querySelectorAll('.gallery-item video');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');
    const closeVideoBtn = document.querySelector('.close-video');
  
    galleryVideos.forEach((video) => {
        video.addEventListener('click', function () {
            modalVideoSource.src = this.getAttribute('src');
            modalVideo.load();
            videoModal.style.display = 'block';
        });
    });
  
    closeVideoBtn.addEventListener('click', function () {
        videoModal.style.display = 'none';
        modalVideo.pause();
        modalVideo.currentTime = 0;
    });
  
    window.addEventListener('click', function (event) {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    });
  }
  
  // Função de carrossel de imagens
  function setupCarousels() {
    const sliders = document.querySelectorAll('.image-slider');
  
    sliders.forEach((slider) => {
        let index = 0;
        const images = slider.querySelectorAll('img');
        
        setInterval(() => {
            images[index].style.display = 'none';
            index = (index + 1) % images.length;
            images[index].style.display = 'block';
        }, 3000); // Muda de imagem a cada 3 segundos
    });
  }
  
  // Função de filtros
  function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const galleryItems = document.querySelectorAll('.gallery-item');
  
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
  
            const filter = this.getAttribute('data-filter');
  
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
  }
  
  // Executa funções ao carregar a página
  window.addEventListener('load', function () {
    openImageOnClick();
    openVideoOnClick();
    setupCarousels();
    setupFilters();
  });