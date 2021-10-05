"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockingAssign = void 0;
const axios_1 = __importDefault(require("axios"));
const mockingAssign = () => axios_1.default
    .get(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => {
    console.log(res.data.status);
    return res.data.status;
})
    .catch((err) => {
    return err;
});
exports.mockingAssign = mockingAssign;
mockingAssign();
