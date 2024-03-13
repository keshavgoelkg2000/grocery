import axios from "axios";
import { MyAxios } from "./bootapi";

export const signUp = (user) => {
    return MyAxios.post('/api/v1/auth/', user)
        .then((response) => response.data)
        .catch((error) => {
            // Handle error
            console.error('Error signing up:', error);
            throw error; // Rethrow the error to be handled by the caller
        });
}

export const loginUsingPassword = (user) => {
    return MyAxios.post('/api/v1/auth/loginP', user)
        .then((response) => response.data)
        .catch((error) => {
            // Handle error
            console.error('Error signing up:', error);
            throw error; // Rethrow the error to be handled by the caller
        });
}

// export const loginUsingPassword = ({user}) => {
//     return MyAxios.post('api/v1/auth/loginP', user)
//     .then((resp) => resp.data)
//     .catch( (error) => {
//         console.log("Error while loging ", error);
//         throw error;
//     });
// }