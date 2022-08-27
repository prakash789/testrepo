import axios from "axios"
import { SERVER_ADDRESS } from "../../Services/Config"

export const regenerateToken = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    return axios.post(`${ SERVER_ADDRESS }/api/regenerate`)
        .then( response => {
            localStorage.setItem('userData', JSON.stringify({ ...userData, token: response.headers.token, refreshtoken: response.headers.refreshtoken }));
        })
        .catch( error => {
            localStorage.removeItem('userData');
            window.location.pathname = '/';
        })
}