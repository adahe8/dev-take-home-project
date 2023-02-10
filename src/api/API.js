import axios from "axios";

export const api = axios.create({
    baseURL: "https://api.acmucsd.com/api/v2"
})

export const getEvents = async () => {
    const response = await api.get('/event/past');
    return response.data;
}