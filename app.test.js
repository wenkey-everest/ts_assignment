"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const app_1 = require("./app");
const api = { message: "hello world", status: "success" };
const res = { data: api };
jest.mock('axios');
const mockedAxios = axios_1.default;
test("Api should return status", () => {
    mockedAxios.get.mockResolvedValue(res);
    expect.assertions(1);
    return (0, app_1.mockingAssign)().then((res) => expect(res).toEqual(api.status));
});
test("Api doesn't fetch the data", () => {
    mockedAxios.get.mockRejectedValue(null);
    return (0, app_1.mockingAssign)().catch((fail) => {
        expect(fail).toEqual(null);
        expect.assertions(1);
    });
});
