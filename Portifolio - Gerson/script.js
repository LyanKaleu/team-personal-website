// Seleciona todos os links de galeria
const galleryLinks = document.querySelectorAll('.gallery-link');

// Seleciona o modal e a imagem dentro dele
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

// Adiciona evento de clique a cada link de galeria
galleryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        const largeImageSrc = this.getAttribute('href'); // Obtém o URL da imagem grande
        console.log('Clicou na miniatura:', largeImageSrc); // Verifica no console do navegador se o caminho está correto

        modalImage.src = largeImageSrc; // Define o src da imagem no modal

        modal.style.display = 'block'; // Exibe o modal
    });
});

// Fecha o modal ao clicar no botão de fechar
const closeButton = document.getElementsByClassName('close')[0];
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora da imagem
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Função para lidar com o formulário de busca
function buscarVideos() {
    const query = document.getElementById('search-query').value.trim();
    if (query !== '') {
        const apiKey = 'AIzaSyAU2JbeVqtmmy9H56jUX9Wo26gmzJks_Dg'; // Substitua pela sua própria chave de API do YouTube
        const maxResults = 5; // Quantidade máxima de resultados a serem exibidos

        // URL da API do YouTube para busca
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&key=${apiKey}`;

        // Requisição GET para a API do YouTube
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Limpa resultados anteriores
                document.getElementById('search-results').innerHTML = '';

                // Processa os resultados
                data.items.forEach(item => {
                    const videoId = item.id.videoId;
                    const videoTitle = item.snippet.title;
                    const videoThumbnail = item.snippet.thumbnails.medium.url;

                    // Cria elementos para exibir os resultados
                    const resultItem = document.createElement('div');
                    resultItem.classList.add('video-result');

                    const thumbnail = document.createElement('img');
                    thumbnail.src = videoThumbnail;
                    thumbnail.alt = videoTitle;

                    const title = document.createElement('h3');
                    title.textContent = videoTitle;

                    // Cria link para o vídeo
                    const link = document.createElement('a');
                    link.href = `https://www.youtube.com/watch?v=${videoId}`;
                    link.target = '_blank';
                    link.appendChild(thumbnail);
                    link.appendChild(title);

                    // Adiciona resultado à lista de resultados
                    document.getElementById('search-results').appendChild(link);
                });
            })
            .catch(error => {
                console.error('Erro ao buscar vídeos:', error);
            });
    } else {
        alert('Por favor, digite um termo de busca.');
    }
}

// Adiciona evento de submit ao formulário de busca
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de submeter o formulário
    buscarVideos();
});
