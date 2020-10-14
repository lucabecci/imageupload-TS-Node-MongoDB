export const createCheckCamps = (
    title: string, 
    description: string, 
    imagePath: string) => {
    if (title == null ||
        description == null ||
        imagePath == null){
            return true
        }
}

export const IDCheck = (id: string) => {
    if(id.length <= 20){
        return true
    } 
    return false
}

export const bodyCheck = (title: string, description: string) => {
    if(title == null || description == null){
        return true
    }
    return false
}