import { ICategoryItem, IParamsCategory } from "../../../interface/Services/interface.category.services"
import { useGetAllCategory } from "../../../services/service.category"
import { useCategoryState } from "../../../store/category"
import { useLoading } from "../../../store/loading"
import { usePaginations } from "../../../store/paginations"


export const useCategory = () => {
    const {mutate: getAllCategory } = useGetAllCategory()
 
    const {page,limit, handleChangePage} = usePaginations()
    const {dataCategory,handleDataCategory} = useCategoryState()
    
    const {loading, handleActiveLoading,handleInactiveLoading} = useLoading()
    
    const handleGetAllCategory = ({name,description,tag}: IParamsCategory) => {
        const params = {
            name,
            description,
            tag,
            page, 
            limit
        }
        handleActiveLoading()
        getAllCategory(params, {
            onSuccess: (res) => {
                handleInactiveLoading()
                handleDataCategory(res)
            },
            onError: (err) => {
                handleInactiveLoading()
                console.log(err.message)
            }
            
        })
    }

        

    
    const dataCategoryFormatted = dataCategory?.items.map((item) => {
        return {
           name: item.name,
           description: item.description,
           tag:item.tag,
           author: item.users.name,
           actions: [
            { label: 'Edit', icon: 'edit', onClick: (row: ICategoryItem) => console.log('Edit:', row.id) },
            { label: 'Delete', icon: 'delete', onClick: (row: ICategoryItem) => console.log('Delete:', row.id) },
          ],
        }
    }) 

  


    return {
        page,
        loading,
        dataCategoryFormatted,
        
        handleGetAllCategory,
        handleChangePage
    }
}