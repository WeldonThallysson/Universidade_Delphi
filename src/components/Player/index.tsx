
type PlayerProps = {
    videoUrl: string
    width?: number 
    height?: number 
}

export const Player = ({ videoUrl, width,height }: PlayerProps) => {
    // Função para transformar o link do vídeo do YouTube em um embed
    const getEmbedUrl = (url: string) => {
        const videoId = url.split('v=')[1]?.split('&')[0]; // Pega o ID do vídeo
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <div style={{ position: 'relative',height: '100%', overflow: 'hidden', maxWidth: '100%', background: '#000' }}>
            <iframe
                src={getEmbedUrl(videoUrl)}
                style={{ width: width ?? '100%', height: height ?? 600, borderRadius: 15 }}
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video Player"
                
            />
        </div>
    );
};