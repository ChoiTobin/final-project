import axios from "axios";
import { getCookie } from "../cookie/cookie";


//헤더 없는 인스턴스
export const nhinstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {},
});

//헤더 있는 인스턴스
export const hInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Access_Token": getCookie("Access_Token") === undefined ? "" : getCookie("Access_Token"),
    },
    withCredentials: true,
});