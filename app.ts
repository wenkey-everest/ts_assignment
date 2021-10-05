import axios from "axios";
const mockingAssign = () =>
  axios
    .get(`https://dog.ceo/api/breeds/image/random`)
    .then((res:any) => {
        console.log(res.data.status);
        return res.data.status;})
    .catch((err)=>{
        return err;
    }
    );
    export{mockingAssign}
