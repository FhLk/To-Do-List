const API_URL : string | undefined = process.env.API
const OFFSET : number | undefined = Number(process.env.DEFAULT_OFFSET)
const LIMIT : number | undefined = Number(process.env.DEFAULT_LIMIT)

export interface TaskData {
    id : string
    title : string
    description : string
    createdAt : string
    status: string
}

export interface TodoData {
    tasks : TaskData[]
    pageNumber : number
    totalPages : number
}

export const getAllData = async () =>{
    try {
        const res = await fetch(`${API_URL}`)
        const jsonData = await res.json()
        return jsonData
    } catch (error) {
        console.error(error)
    }
}

export const getTodoList = async (offset : number = OFFSET, limit : number = LIMIT) =>{  
    try {
        const res = await fetch(`${API_URL}?status=TODO&offset=${offset}&limit=${limit}&sortBy=createdAt&isAsc=true`)
        const jsonData = await res.json()
        return jsonData.tasks
    } catch (error) {
        console.error(error)
    }
}

export const getDoingList = async (offset : Number = OFFSET) =>{  
    try {
        const res = await fetch(`${API_URL}?status=DOING&offset=${offset}&limit=10&sortBy=createdAt&isAsc=true`)
        const jsonData = await res.json()
        return jsonData.tasks
    } catch (error) {
        console.error(error)
    }
}

export const getDoneList = async (offset : Number = OFFSET) =>{  
    try {
        const res = await fetch(`${API_URL}?status=DONE&offset=${offset}&limit=10&sortBy=createdAt&isAsc=true`)
        const jsonData = await res.json()
        return jsonData.tasks
    } catch (error) {
        console.error(error)
    }
}