import axios from "axios";

 export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '2f2cafe73ec944c385c6e0ec509c1277'
    }
})