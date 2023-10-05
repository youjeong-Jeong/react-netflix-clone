import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "a335d1d5792feebcd2bcaecc0d6aa253",
        language: "ko-KR",
    },
});

export default instance;