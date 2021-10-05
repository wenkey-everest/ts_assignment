import axios from "axios";
const mockingAssign = async () =>
 await axios
    .get(`https://dog.ceo/api/breeds/image/random`)
    .then((res:any) => {
        return res.data.status;})
    .catch((err)=>{
        return err;
    }
    );
    export{mockingAssign}
