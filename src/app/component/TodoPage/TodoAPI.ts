const API_URL : string | undefined = process.env.API
const OFFSET : Number | undefined = Number(process.env.DEFAULT_OFFSET)

export interface TodoData {
    id : string
    title : string
    descripttion : string
    createdAt : string
    status: string
}

export const getList = async (offset : Number = OFFSET) =>{
    console.log(API_URL);
    
    // try {
    //     const res = await fetch(`${API_URL}?status=TODO&offset=${offset}&limit=10&sortBy=createdAt&isAsc=true`)
    //     const jsonData = await res.json()
    //     return jsonData
    // } catch (error) {
    //     console.error(error)
    // }
}