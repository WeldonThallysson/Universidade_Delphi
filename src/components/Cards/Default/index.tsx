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
  handleBtnSecond: () => void;
  handleBtnPrimary: () => void;
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
}: DefaultProps) => {
  const { theme } = useTheme();
  return (
    <Card
      sx={{
        maxWidth: maxWidth ?? 345,
        borderRadius: 2,
        boxShadow: 3,
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
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
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
        </Box>
      </CardContent>
    </Card>
  );
};
