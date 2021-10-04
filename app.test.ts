 
import axios from "axios";
import {mockingAssign} from "./app";
const api = { status : "success"};
const resp = {data:api};
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>
  
test("Api should return status", async () => {   
    mockedAxios.get.mockResolvedValue(resp);
    return mockingAssign().then((res)=> expect(res).toEqual(api.status));
  })

  test("Api doesn't fetch the data", async ()=>{
    mockedAxios.get.mockRejectedValue(resp);
   return mockingAssign().then((res)=> expect(res).toEqual(api.status)); 
  })