import axios from "axios";

// Base url to make request to the mmovie database.
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;