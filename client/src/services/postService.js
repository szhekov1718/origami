import api from "./api";


export const getAll = () => {
    return fetch(api.posts)
    .then(res => res.json())
    .catch(error => console.log("Handled error:" + error));
};