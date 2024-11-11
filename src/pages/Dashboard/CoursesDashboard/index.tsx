import { Box, Button, CircularProgress, Divider, Grid2, Typography } from "@mui/material";
import { useEffect } from "react"; 
import { useTheme } from "../../../hooks/useTheme/useTheme";
import { useForm } from "react-hook-form";
import CustomBreadcrumbs from "../../../components/Breadcrumbs";
import { BreadcrumbCategory, columnsCategory } from "../../../constants/mocks/PagesDashboard/Category/mocks";
import { Inputs } from "../../../components/UI/Inputs";
import Tables from "../../../components/UI/Tables";
import { Paginations } from "../../../components/UI/Pagination";
import SchoolIcon from '@mui/icons-material/School'; 
import { useCourses } from "../../../hooks/hookPage/Courses/useCourses";
import { columnsCourses } from "../../../constants/mocks/PagesDashboard/Courses/mocks";
import { Containers } from "../../../components/UI/Containers";


const CoursesDashboard = () => {
  const {
    loading,
    page,
    dataCoursesFormatted,
    dataOptionsCategoriesFormated,
    handleChangePage,
    handleGetCategories,
    handleGetAllCourses,

  } = useCourses();


  const { theme } = useTheme();
  const { register, handleSubmit,setValue } = useForm();

  useEffect(() => {
    handleGetCategories()
    handleGetAllCourses({});
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
        gap: 1,
        alignItems:"center",
        
      }}>

        <SchoolIcon sx={{fontSize: 25}}/>
        
        <Typography
          sx={{
            fontSize: 25,
            color: theme.colors.blacksoft,
            fontFamily: "Poppins",
            fontWeight: "500"
          }}
        >
        Cursos
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

            onClick={handleSubmit(handleGetAllCourses)}
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
        {dataCoursesFormatted?.length !== 0 ? (
          <>
          
          <Tables
              columns={columnsCourses ?? []}
              itemsRow={dataCoursesFormatted ?? []}
            />
            <Paginations
              page={page}
              totalPages={10}
              onPageChange={(page) => handleChangePage(page)}
            />
          </>
        ) : (
          <Containers.Default justifyContent={"center"} alignItems={"center"} height={"100%"} width={"100%"} padding={"2rem 0"}>
            <Typography>Nenhuma curso encontrado...</Typography>
          </Containers.Default>
        )}
      </>
      )}
    </Box>
  </Box>
</Box>
 );
}

export default CoursesDashboard