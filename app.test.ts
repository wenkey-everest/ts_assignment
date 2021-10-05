 
import axios from "axios";
import {mockingAssign} from "./app";
const api = {message:"hello world" ,status : "success"};
const res = {data:api};
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>

test("Api should return status", () => {   
    mockedAxios.get.mockResolvedValue(res);
    expect.assertions(1);
    return mockingAssign().then((res)=> expect(res).toEqual(api.status));
  })
  test("Api doesn't fetch the data", ()=>{
   mockedAxios.get.mockRejectedValue(null);
   return mockingAssign().catch((fail)=>{ expect(fail).toEqual(null)
         expect.assertions(1);}); 
  })