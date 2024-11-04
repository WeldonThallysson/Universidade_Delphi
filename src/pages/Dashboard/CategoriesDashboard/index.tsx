import { Box, Button, CircularProgress, Divider, Grid2, Typography } from "@mui/material";
import CustomBreadcrumbs from "../../../components/Breadcrumbs";
import { BreadcrumbCategory, columnsCategory } from "../../../constants/mocks/PagesDashboard/Category/mocks";
import Tables from "../../../components/UI/Tables";
import { Delete, Edit } from "@mui/icons-material";
import { useCategory } from "../../../hooks/hookPage/Category/useCategory";
import { Paginations } from "../../../components/UI/Pagination";
import { usePaginations } from "../../../store/paginations";
import { useEffect } from "react";
import { Inputs } from "../../../components/UI/Inputs";
import { useForm } from "react-hook-form";
import { useTheme } from "../../../hooks/useTheme/useTheme";




const CategoryDashboard = () => {

  const {handleGetAllCategory,loading,page,dataCategoryFormatted, handleChangePage} = useCategory()
  const {theme} = useTheme()
  const {
    register,
    handleSubmit
  } = useForm();

  useEffect(() => {
    handleGetAllCategory({})
  },[])

 return (
   <Box >
    <Box sx={{
      display:"flex",
      flexDirection:"column",
      gap: 1,
    }}>
     <CustomBreadcrumbs 
        items={BreadcrumbCategory}
      />
      <Box sx={{display:'flex', flexDirection:"column", gap: 2}}>
       <Divider/>
       <Typography sx={{
              fontSize: 25,
              color: theme.colors.blacksoft,
              fontFamily: "Poppins"
            }}>Buscar Categorias</Typography>
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            gap: 2,
            background: 'white',
            padding: '1rem 1rem',
            borderRadius: 2,
          }}>
            
           <Grid2 container spacing={2} alignItems={"center"}>
            <Grid2>
                <Inputs.Default
                  register={register}
                  placeholder={'Nome'}
                  name="name"
                />
            </Grid2>
            <Grid2>
                <Inputs.Default
                register={register}
                placeholder={'Descrição'}
                name="description"
                />
            </Grid2>
            <Grid2>
            <Button sx={{ 
                        "&:hover": {
                            background: 'crimson',
                        },
                        height:"100%",
                        padding: "0.55rem 2rem",
                        background: theme.colors.primary,color: theme.colors.secondary}}>
                         Buscar  
             </Button>
            </Grid2>
          </Grid2>
          </Box>
         
        {loading ? (
          <Box sx={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            height:"100%",
            gap: 1,
            marginTop: 5
          }}>
             <CircularProgress size={25} sx={{color:theme.colors.terciary}}/> 
             <Typography>Carregando...</Typography>
          </Box>
        ): (
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

export default CategoryDashboard