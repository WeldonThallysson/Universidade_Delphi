import { Box, Button, CircularProgress, Divider, Grid2, Typography } from "@mui/material";
import { useCategory } from "../../../hooks/hookPage/Category/useCategory";
import { useTheme } from "../../../hooks/useTheme/useTheme";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import CustomBreadcrumbs from "../../../components/Breadcrumbs";
import { BreadcrumbCategory, columnsCategory } from "../../../constants/mocks/PagesDashboard/Category/mocks";
import { Inputs } from "../../../components/UI/Inputs";
import Tables from "../../../components/UI/Tables";
import { Paginations } from "../../../components/UI/Pagination";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const MyAccountDashboard = () => {
  const {
    handleGetAllCategory,
    loading,
    page,
    dataCategoryFormatted,
    handleChangePage,
    handleGetCategories,
  } = useCategory();

  const { theme } = useTheme();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    handleGetAllCategory({});
  }, []);
 return (
  <Box>
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
    }}
  >
    <CustomBreadcrumbs items={BreadcrumbCategory} />
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Divider />
      <Box sx={{
        display:"flex",
        flexDirection:"row",
        gap: 0.8,
        alignItems:"center",
        
      }}>

        <AccountCircleIcon sx={{fontSize: 30}}/>
        
        <Typography
          sx={{
            fontSize: 25,
            color: theme.colors.blacksoft,
            fontFamily: "Poppins",
            fontWeight: "500"
          }}
        >
        Minha Conta
        </Typography>
      </Box>

   
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          background: "white",
          padding: "1rem 1rem",
          borderRadius: 2,
        }}
      >
        <Grid2 container spacing={2} alignItems={"center"}>
          <Grid2>
            <Inputs.Default
              label={"Nome"}
              heightInput={40}
              register={register}
              name="name"
            />
          </Grid2>
          <Grid2>
            <Inputs.Default
              label={"Descrição"}
              heightInput={40}
              register={register}
              name="description"
            />
          </Grid2>
          <Grid2
            sx={{
              display: "flex",
              flexDirection:"column",
            }}
          >
            <Button
              sx={{
                "&:hover": {
                  background: "crimson",
                },
                mt:2.8,
                padding: "0.55rem 2rem",
                background: theme.colors.primary,
                color: theme.colors.secondary,
              }}
            >
              Buscar
            </Button>
          </Grid2>
        </Grid2>
      </Box>

      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            gap: 1,
            marginTop: 5,
          }}
        >
          <CircularProgress
            size={25}
            sx={{ color: theme.colors.terciary }}
          />
          <Typography>Carregando...</Typography>
        </Box>
      ) : (
        <>
          <Tables
            columns={columnsCategory ?? []}
            itemsRow={dataCategoryFormatted ?? []}
          />
          <Paginations
            page={page}
            totalPages={10}
            onPageChange={(page) => handleChangePage(page)}
          />
        </>
      )}
    </Box>
  </Box>
</Box>
 );
}

export default MyAccountDashboard