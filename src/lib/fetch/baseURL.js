import axios from "axios";

const BASEURL = "http://localhost:8080";
const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1/"
})
const axiosInstanceTwo = axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        Authorization: "Bearear " + localStorage.getItem("_token")
    }
})
export {
    axiosInstance,
    axiosInstanceTwo,
    BASEURL,
}