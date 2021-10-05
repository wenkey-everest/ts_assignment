 
import axios from "axios";
import {mockingAssign} from "./app";
const api = {message:"hello world" ,status : "success"};
const res = {data:api};
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>

test("Api should return status", async () => {   
    mockedAxios.get.mockResolvedValue(res);
    return mockingAssign().then((res)=> expect(res).toEqual(api.status));
  })
  test("Api doesn't fetch the data", async ()=>{
   mockedAxios.get.mockRejectedValue(null);
   return mockingAssign().then((res)=> expect(res).toEqual(null)); 
  })