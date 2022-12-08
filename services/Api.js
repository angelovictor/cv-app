import axios from 'axios';

const api = axios.create({
    baseURL: "https://parseapi.back4app.com/classes",
    headers: {
        "X-Parse-Application-Id": "qHDptlw8VtB55Leb6j41qsGS2A9NOjyWwSumicKb",
        "X-Parse-REST-API-Key": "lhih6ZQunjES4BHNXrj6npWzSCXmHAvtndwBig5H"
    },
});

export default api;