import react,{createContext,useContext,useState} from "react";

export const AuthData = createContext({
   
});

function AuthContext({children}){

    const [date,setDate] = useState();
    const [totalPerDay,setTotal] = useState();
    const [authToken,setAuthToken] = useState();

    return <AuthData.Provider value={ { value1:[date,setDate] , value2: [totalPerDay,setTotal] , value3: [authToken,setAuthToken]}}>
        {children}
    </AuthData.Provider>
}

export default AuthContext ;