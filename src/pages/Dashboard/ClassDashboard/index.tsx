import { Box, Button, CircularProgress, Divider, Grid2, Typography } from "@mui/material";
import Tables from "../../../components/UI/Tables";
import { Paginations } from "../../../components/UI/Pagination"; 
import { useEffect } from "react";
import { useTheme } from "../../../hooks/useTheme/useTheme";
import { useForm } from "react-hook-form";
import CustomBreadcrumbs from "../../../components/Breadcrumbs";
import { BreadcrumbCategory } from "../../../constants/mocks/PagesDashboard/Category/mocks";
import { Inputs } from "../../../components/UI/Inputs";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useClassRoom } from "../../../hooks/hookPage/ClassRoom/useClassRoom";
import { columnsClass } from "../../../constants/mocks/PagesDashboard/Class/mocks";
import { Containers } from "../../../components/UI/Containers";



const ClassDashboard = () => {
  const {
    dataClassFormatted,
    loading,

    page,
    dataOptionsCoursesFormated,
    dataOptionsCategoriesFormated,
    handleGetAllClass,
    handleGetCourse,
    handleChangePage,
    handleGetCategories,
  } = useClassRoom();

  const { theme } = useTheme();
  const { register,setValue, handleSubmit } = useForm();

  useEffect(() => {
    handleGetAllClass({});
    handleGetCategories()
    handleGetCourse()
  }, [page]);
 
  
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

        <PlayCircleIcon sx={{fontSize: 25}}/>
        
        <Typography
          sx={{
            fontSize: 25,
            color: theme.colors.blacksoft,
            fontFamily: "Poppins",
            fontWeight: "500"
          }}
        >
        Aulas
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
          <Grid2 size={{
             lg: 2
          }}>
            <Inputs.SelectInput
              label={"Categorias"}
              options={dataOptionsCategoriesFormated ?? []}
              handleOptionSelected={(value) => { 
                setValue('id_category',value) 
                console.log(value) 
              }}
              width={"100%"}
            />
          </Grid2>
          <Grid2 size={{
             lg: 2
          }}>
            <Inputs.SelectInput
              label={"Cursos"}
              options={dataOptionsCoursesFormated ?? []}
              handleOptionSelected={(value) => { 
                setValue('id_course',value) 
                console.log(value) 
              }}
              width={"100%"}
            />
          </Grid2>
          <Grid2>
            <Inputs.Default
              label={"Tag"}
              heightInput={40}
              register={register}
              name="tag"
            />
          </Grid2>

          <Grid2>
            <Inputs.Default
              label={"Tutor"}
              heightInput={40}
              register={register}
              name="tutor"
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
              
            onClick={() => handleSubmit(handleGetAllClass)}
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
          {dataClassFormatted?.length !== 0 ? (
          <>
          <Tables
            columns={columnsClass ?? []}
            itemsRow={dataClassFormatted ?? []}
          />
          <Paginations
            page={page}
            totalPages={10}
            onPageChange={(page) => handleChangePage(page)}
          />
        </>
        ) : (
          <Containers.Default justifyContent={"center"} alignItems={"center"} height={"100%"} width={"100%"} padding={"2rem 0"}>
          <Typography>Nenhuma aula encontrada...</Typography>
       </Containers.Default>
        )}
        </>
      )}
    </Box>
  </Box>
</Box>
 );
}

export default ClassDashboard