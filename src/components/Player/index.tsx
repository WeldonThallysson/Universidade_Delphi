import { Box } from "@mui/material";

type PlayerProps = {
    videoUrl: string;
    width?: number;
    height?: number;
};

export const Player = ({ videoUrl, width, height }: PlayerProps) => {
    const getEmbedUrl = (url: string) => {
        let videoId: string | undefined;

        if (url.includes('v=')) {
            videoId = url.split('v=')[1]?.split('&')[0];
        } else if (url.includes('si=')) {
            videoId = url.split('si=')[1]?.split('&')[0]; 
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1]?.split('?')[0]; 
        }

        return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    };

    return (
        <Box sx={{
            display:"flex", 
            width: "100%",
            height:{
                xs: 220,
                sm: 350,
                md: 400,
                lg: 450,
                xl: 550
            },
            
        }}>
             <div style={{ position: 'relative',width:"100%", height: '100%', overflow: 'hidden', maxWidth: '100%', background: '#0000000' }}>
            {videoUrl && (
                <iframe
                    src={getEmbedUrl(videoUrl)}
                    style={{ width: width ?? '100%', height: height ?? "100%", borderRadius: 15 }}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube Video Player"
                />
            )}
        </div>
        </Box>
       
    );
};
