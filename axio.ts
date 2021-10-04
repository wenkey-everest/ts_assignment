import axios from "axios";


const swapiGetter = async () =>
 await axios
    .get(`https://dog.ceo/api/breeds/image/random`)
    .then((res:any) => {
        const one = res.data.status;
        return one;
    })
    .catch((err) => console.error(err));
    
    export{swapiGetter}
