import axios from "axios";
import { adminAPI } from "../Constants/API";


const adminAxious = axios.create({
    baseURL:adminAPI
})

export default adminAxious;