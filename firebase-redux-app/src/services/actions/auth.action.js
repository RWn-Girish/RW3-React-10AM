import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const signUpSuc = () => {
    return {
        type: "SIGNUP_SUCCESS"
    }
}
const signUpRej = (error) => {
    return {
        type: "SIGNUP_REJECT",
        payload: error
    }
}


export const registerUserAsync = (data) => {
    return async (dispatch) => {
        try {
            let newUser = await createUserWithEmailAndPassword(auth, data.email, data.password)
            // console.log(newUser);
            dispatch(signUpSuc())
        } catch (error) {
            console.log(error);
            dispatch(signUpRej(error.message))
        }
    }
}