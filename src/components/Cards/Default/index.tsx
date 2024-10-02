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
  handleActionCard,
}: DefaultProps) => {
  const { theme } = useTheme();
  return (
    <Card
      onClick={() => handleActionCard && handleActionCard()}
      sx={{
        maxWidth: maxWidth ?? {
          xs: 200,
          sm: 345,
          
        },
        borderRadius: 2,
        border:"none",
        background:"transparent",
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
          sx={{
            height: {
              xs: 140,
              sm: 160,
              md: 180,
              lg: 200,
            }
          }}
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

      <CardContent
        sx={{
          position: "relative",
          padding: {
            xs: "0.6rem 1rem",
            sm: "1.2rem 1rem",
            md: "1.2rem 1rem"
          }, 
          "&:last-child": {
            paddingBottom: {
              xs: 0,
              sm: 1,
              md: 2,
              lg: 2
            }, 
          },
          border:"none",
          zIndex: 2,
          background: "linear-gradient(135deg, #a52c2c, #e8413b, #8b233d)", 
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Camada preta transparente
            zIndex: 4, // Abaixo do conteúdo, acima do fundo
          },
        }}
      >
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 1,
            textOverflow: "ellipsis",
            color: "white", 
            position: "relative", 
            zIndex: 6,
            fontSize: {
              xs: '0.8rem',
              sm: "1rem"
            }
          }}
          variant="subtitle2"
          gutterBottom
        >
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
            color: "white", // Textos brancos
            position: "relative",
            zIndex: 6,
            fontSize: {
              xs: '0.8rem',
              sm: "1rem"
            }
          }}
        >
          {description}
        </Typography>

        <Box
          mt={2}
          display="flex"
          justifyContent="space-between"
          sx={{ position: "relative", zIndex: 2 }}
        >
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
