import { useState, useEffect, createContext, useContext, useMemo } from "react";
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT
//context allows us to access data without passing through the application via props.
const AuthContext = createContext();


// define how we want our auth to behave
export const AuthProvider = ({ children }) => { 
    //user token , email and is loading 
    const [userToken, setUserToken] = useState(null);
	const [userEmail, setUserEmail] = useState("")
    //we can use isAuthLoading to add a spinner if we wish
    const [isAuthLoading, setIsAuthLoading] = useState(false);


    const register = async (email, password) => {
        setIsAuthLoading(true);
        const registerResult = await registerUser(email, password);
        setIsAuthLoading(false);
        return registerResult;
    }; 

    const login = async (email, password) => {

    }; 

    const logout = async () => {

    };

    /**
     *Memoization is essentially caching. The variable value will only be recalculated if the 
    variables in the watched array change.
     */
    const value = useMemo(
        () => ({
            userToken,
            userEmail,
            login,
            logout,
            register
        }), []
    );


    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>


} 


//make our auth context accessible across the react app
export const useAuth = () => {
    return useContext(AuthContext)
}

//make a post request to our backend endpoint
const registerUser = async (email, password) => {
    const url = `${urlEndpoint}/users/registration`
    const postReq = axios.post(url,{
        email, 
        password,
    },
    {
       headers: {
         "Content-Type": "application/json",
       },
    })
    const response = await postReq.json()
    return response;
}

const loginUser = async (email, password) => {

}