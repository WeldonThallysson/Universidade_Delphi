

export const useStorage = () => {
    const handleSaveStorage = ({name,data}: {name: string, data: any}) => {
        localStorage.setItem(name, JSON.stringify(data))
    
    } 
    const handleGetStorage = (item: string) => {
        localStorage.getItem(item)
    }
    

    return {
        handleSaveStorage,
        handleGetStorage,
    }
}
 