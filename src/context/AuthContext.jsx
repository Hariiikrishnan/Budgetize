import react,{createContext,useContext,useState} from "react";

export const AuthData = createContext({
   
});

function AuthContext({children}){

    const [date,setDate] = useState();
    const [totalPerDay,setTotal] = useState();
    const [authToken,setAuthToken] = useState();
    const [challenger,setChallenger] = useState();

    return <AuthData.Provider value={ { value1:[date,setDate] , value2: [totalPerDay,setTotal] , value3: [authToken,setAuthToken] , value4: [challenger,setChallenger]}}>
        {children}
    </AuthData.Provider>
}

export default AuthContext ;