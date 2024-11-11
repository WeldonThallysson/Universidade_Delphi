

export const useStorage = () => {
    const handleSaveStorage = ({name,data}: {name: string, data: any}) => {
        localStorage.setItem(name, JSON.stringify(data))
    
    } 
    const handleGetStorage = (items: string) => {
        const item = localStorage.getItem(items)
        if(item){
            return JSON.parse(item)
        }
    }

    return {
        handleSaveStorage,
        handleGetStorage,
    }
}
 