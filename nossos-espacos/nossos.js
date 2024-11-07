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
    setupCarousels();
    setupFilters();
});
