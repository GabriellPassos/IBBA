//AOVIVO
const chave_api = '';
const canal_id = '@Podpah';
const playlist_id = 'nnHleOSpmYo';
async function verificarLive(aovivo = true) {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlist_id}&key=${chave_api}`;
    if (aovivo) {
        url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${canal_id}&type=video&eventType=live&key=${chave_api}`;
    } else {

    }

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items.length > 0) {
            // Existe uma live ativa, exibir o vídeo
            const videoId = data.items[0].id.videoId;
            const liveUrl = `https://www.youtube.com/watch?v=${videoId}`;
            document.getElementById("yt-container").innerHTML = `
                <iframe width="100%" height="500"
                    src="https://www.youtube.com/embed/${videoId}?control=0" 
                    frameborder="0" allowfullscreen>
                </iframe>
            `;
        } else {
            document.getElementById("yt-container").innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/YkZeIPueWy4?controls=0"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>`

        }
    } catch (error) {
        console.error("Erro ao verificar live:", error);
    }
}

// Chamar a função a cada minuto para verificar novas lives
setInterval(verificarLive, 60000);

// Executar a primeira verificação ao carregar a página
verificarLive();


