import axios from "axios"
export interface FetchResponse<T>{
    count:number;
    results:T[]
}
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'b554a4994dce464f980d855dc0ffa343'
    }
})
