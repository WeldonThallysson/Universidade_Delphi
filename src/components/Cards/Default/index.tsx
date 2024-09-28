import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@mui/material";
import capaIntraWeb from "../../../assets/Cursos/capas/intraweb/capaIntraWeb.png";
import { useTheme } from "../../../hooks/useTheme/useTheme";

type DefaultProps = {
  title: string;
  description: string;
  tag: string;
  img: string;
  titleBtnSecond: string;
  titleBtnPrimary: string;
  maxWidth?: Record<string, string | null> | string | number;
  handleBtnSecond?: () => void;
  handleBtnPrimary?: () => void;
  handleActionCard?: () => void;
};

export const Default = ({
  img,
  maxWidth,
  title,
  description,
  tag = "tag",
  titleBtnSecond = "Acessar Curso",
  titleBtnPrimary = "Assistir",
  handleBtnSecond,
  handleBtnPrimary,
  handleActionCard
}: DefaultProps) => {
  const { theme } = useTheme();
  return (
    <Card
      onClick={() => handleActionCard && handleActionCard()}
      sx={{
        maxWidth: maxWidth ?? 345,
        borderRadius: 2,
        boxShadow: 3,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          cursor: "pointer",
          transform: "scale3d(1.05, 1.05, 1.05)", // Aumenta o tamanho ligeiramente
          boxShadow: 6, // Aumenta a sombra ao passar o mouse
          zIndex: 15, 
        },
      }}
    >
      <Box position="relative">
        <CardMedia
          component="img"
          height="200"
          image={img ?? capaIntraWeb}
          alt="Imagem capa da aula"
        />

        <Chip
          label={tag}
          size="small"
          sx={{
            background: theme.colors.primary,
            color: theme.colors.secondary,
            position: "absolute",
            top: 8,
            left: 8,
            fontWeight: "bold",
     
          }}
        />
      </Box>

      <CardContent>
        <Typography   
        sx={{
          display: "-webkit-box", 
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: 1,
          textOverflow: "ellipsis", 
        }}
        variant="subtitle2"
        color="textSecondary"
        gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2, // Limita a 2 linhas
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>


        <Box mt={2} display="flex" justifyContent="space-between">
          {handleBtnSecond && (
              <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => {
                handleBtnSecond();
              }}
            >
              {titleBtnSecond}
            </Button>
          )}
        {handleBtnPrimary && (
           <Button
           variant="contained"
           color="primary"
           size="small"
           onClick={() => {
             handleBtnPrimary();
           }}
         >
           {titleBtnPrimary}
         </Button>
        )}
         
        </Box>
      </CardContent>
    </Card>
  );
};
